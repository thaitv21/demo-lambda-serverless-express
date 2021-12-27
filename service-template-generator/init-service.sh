CUR_DIR=$(pwd)
PROJECT_DIR=$(pwd)/..

if [[ $CUR_DIR != *service-template-generator ]]; then
  echo "Must be run at service-template-generator directory"
  exit 1;
fi

args=$(getopt -l "name:" -o "n" -- "$@")
eval set -- "$args"
while [ $# -ge 1 ]; do
  case "$1" in
    --)
      # No more options left.
      shift
      break
      ;;
    -n|--name)
      SERVICE_NAME="$2"
      shift
      ;;
    -h)
      echo "Display some help"
      exit 0
      ;;
  esac
  shift
done

SERVICE_DIR=${PROJECT_DIR}/${SERVICE_NAME}
mkdir -p ${SERVICE_DIR}
cp -r ./templates/sources/* ${SERVICE_DIR}
sed -i "s/service-template/$(echo "${SERVICE_NAME,,}")/g" ${SERVICE_DIR}/package.json
sed -i "s/<SERVICE_NAME>/$(echo "${SERVICE_NAME^}")/g" ${SERVICE_DIR}/template.yaml