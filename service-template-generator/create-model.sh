#!/bin/sh
CUR_DIR=$(pwd)
PROJECT_DIR=$(pwd)/..

if [[ $CUR_DIR != *service-template-generator ]]; then
  echo "Must be run at service-template-generator directory"
  exit 1;
fi

args=$(getopt -l "service:,model:,type:" -o "s:m:t" -- "$@")
echo ${CUR_DIR}
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
    -m|--model)
      MODEL_NAME="$2"
      shift
      ;;
    -t|--type)
      MODEL_TYPE="$2"
      shift
      ;;
    -h)
      echo "Display some help"
      exit 0
      ;;
  esac
  shift
done

echo "Creating ${MODEL_NAME} model of ${SERVICE_NAME}"
SERVICE_DIR=${PROJECT_DIR}/${SERVICE_NAME}
MODELS_DIR=${SERVICE_DIR}/models
MODEL_FILE=${MODELS_DIR}/${MODEL_NAME}.ts
mkdir -p ${MODELS_DIR}
cp ./templates/model ${MODELS_DIR}/${MODEL_NAME}.ts
sed -i "s/MODEL_NAME/${MODEL_NAME}/g" ${MODEL_FILE}

if [ ""${MODEL_TYPE}"" = ""mongo"" ]; then
  echo "Creating Mongoose model for ${MODEL_NAME}"
  DB_MODELS_DIR=${SERVICE_DIR}/providers/database/mongo/models
  mkdir -p ${DB_MODELS_DIR}
  MONGO_MODEL_FILE=${DB_MODELS_DIR}/${MODEL_NAME}Model.mongo.ts
  cp ./templates/mongo-model ${MONGO_MODEL_FILE}
  sed -i "s/MODEL_NAME/${MODEL_NAME}/g" ${MONGO_MODEL_FILE}
fi

if [ ""${MODEL_TYPE}"" = ""sql"" ]; then
  echo "Creating Sequelize model for ${MODEL_NAME}"
  DB_MODELS_DIR=${SERVICE_DIR}/providers/database/sequelize/models
  mkdir -p ${DB_MODELS_DIR}
  SQL_MODEL_FILE=${DB_MODELS_DIR}/${MODEL_NAME}Model.sequelize.ts
  cp ./templates/sequelize-model ${SQL_MODEL_FILE}
  sed -i "s/MODEL_NAME/${MODEL_NAME}/g" ${SQL_MODEL_FILE}
fi

echo "Finished to create ${MODEL_NAME} model"