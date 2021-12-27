#!/bin/sh
CUR_DIR=$(pwd)
DEPLOYMENT_DIR=${CUR_DIR}/deployment

# Clean deployment folder
echo "Cleaning deployment folder"
rm -rf deployment
mkdir deployment
mkdir deployment/layer
mkdir deployment/layer/nodejs

# Build lambda
echo "Building lambda"
node-prune -exclude "*.ts"
npm run build
cd ${CUR_DIR}/dist
zip -r -q lambda.zip *
mv lambda.zip ${DEPLOYMENT_DIR}/lambda.zip 
cd ${CUR_DIR}

# Build lambda layer
echo "Building lambda layer"
cd ${DEPLOYMENT_DIR}/layer/nodejs 
ln -s ${CUR_DIR}/node_modules .
# zip -r -q layer.zip *
# mv layer.zip ${DEPLOYMENT_DIR}/layer.zip
cd ${CUR_DIR}
# rm -rf deployment/nodejs
echo "Finished!"