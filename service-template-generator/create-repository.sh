CUR_DIR=$(pwd)
PROJECT_DIR=$(pwd)/..

if [[ $CUR_DIR != *service-template-generator ]]; then
  echo "Must be run at service-template-generator directory"
  exit 1;
fi

args=$(getopt -l "service:,name:" -o "s:n" -- "$@")
eval set -- "$args"
while [ $# -ge 1 ]; do
  case "$1" in
    --)
      # No more options left.
      shift
      break
      ;;
    -s|--service)
      SERVICE_NAME="$2"
      shift
      ;;
    -n|--name)
      REPO_NAME="$2"
      shift
      ;;
    -h)
      echo "Display some help"
      exit 0
      ;;
  esac
  shift
done

echo "Creating ${REPO_NAME} of ${SERVICE_NAME}"
SERVICE_DIR=${PROJECT_DIR}/${SERVICE_NAME}
REPO_DIR=${SERVICE_DIR}/repositories
REPO_INTERFACE_DIR=${REPO_DIR}/interfaces
mkdir -p ${REPO_INTERFACE_DIR}
cp ./templates/repository-interface ${REPO_INTERFACE_DIR}/${REPO_NAME}.ts
cp ./templates/repository ${REPO_DIR}/${REPO_NAME}Impl.ts
sed -i "s/REPO_NAME/${REPO_NAME}/g" ${REPO_INTERFACE_DIR}/${REPO_NAME}.ts
sed -i "s/REPO_NAME/${REPO_NAME}/g" ${REPO_DIR}/${REPO_NAME}Impl.ts