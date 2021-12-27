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
      UC_NAME="$2"
      shift
      ;;
    -h)
      echo "Display some help"
      exit 0
      ;;
  esac
  shift
done

echo "Creating ${UC_NAME} of ${SERVICE_NAME}"
SERVICE_DIR=${PROJECT_DIR}/${SERVICE_NAME}
USECASES_DIR=${SERVICE_DIR}/useCases
UC_INTERFACE_DIR=${USECASES_DIR}/interfaces
mkdir -p ${UC_INTERFACE_DIR}
cp ./templates/use-case-interface ${UC_INTERFACE_DIR}/${UC_NAME}.ts
cp ./templates/use-case ${USECASES_DIR}/${UC_NAME}Impl.ts
sed -i "s/UC_NAME/${UC_NAME}/g" ${UC_INTERFACE_DIR}/${UC_NAME}.ts
sed -i "s/UC_NAME/${UC_NAME}/g" ${USECASES_DIR}/${UC_NAME}Impl.ts