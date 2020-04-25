# medrex-chaincode-fabric-1.4
The chaincode for medrex in Hyperledger Fabric 1.4
Collaborators: Ramlah Aziz and Zeyad Ahmed

# Instructions
These instructions are for creating all these files. You need not follow them to deploy the blockchain, just copy the entire folder and deploy it

I created the files configtx.yaml and crypto-config.yaml inside first-network/network directory

Then  I opened the terminal in this directory and executed

$ cryptogen generate --config=./crypto-config.yaml

Then I made first-network/network/config dir

Create config/genesis.block by executing the following command in network dir

$ configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./config/genesis.block

Generate channel.tx (.tx is a configuration transaction) file using profile TwoOrgsChannel defined in configtx and name channel mychannel

$ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./config/channel.tx -channelID mychannel

Now we need to create anchor peer .tx files

$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./config/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP

$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./config/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP

Then created and edited the docker files

$ docker-compose -f docker-compose-ca.yml up -d ca.org1.medrex.com ca.org2.medrex.com
$ docker-compose -f docker-compose-cli.yml up -d orderer.medrex.com peer0.org1.medrex.com peer1.org1.medrex.com peer0.org2.medrex.com peer1.org2.medrex.com
$ docker-compose -f docker-compose-couch.yml up -d couchdb0 couchdb1 couchdb2 couchdb3
 
 Last command is giving me an error: ERROR: The Compose file is invalid because:
Service peer0.org1.medrex.com has neither an image nor a build context specified. At least one must be provided.

# Trying byfn commands 

$ cryptogen generate --config=./crypto-config.yaml
$ mkdir channel-artifacts (same as config before)
$ export FABRIC_CFG_PATH=$PWD
$ configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
$ export CHANNEL_NAME=mychannel
$ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID $CHANNEL_NAME
$ docker-compose -f docker-compose-cli.yaml up -d
$ docker exec -it cli bash (this will start the cli bash whatever that is and all cmds ro be typed after the # )

Creating the channel
$ export CHANNEL_NAME=mychannel 
$ peer channel create -o orderer.medrex.com:7050 -c $CHANNEL_NAME -f ./channel-artifacts/channel.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/medrex.com/orderers/orderer.medrex.com/msp/tlscacerts/tlsca.medrex.com-cert.pem

Peer 0 org 1 joins channel
$ peer channel join -b mychannel.block

Peer 1 Org 1
$ CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.medrex.com/users/Admin@org1.medrex.com/msp CORE_PEER_ADDRESS=peer1.org1.medrex.com:8051 CORE_PEER_LOCALMSPID="Org1MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.medrex.com/peers/peer1.org1.medrex.com/tls/ca.crt peer channel join -b mychannel.block

$ CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/users/Admin@org2.medrex.com/msp CORE_PEER_ADDRESS=peer0.org2.medrex.com:9051 CORE_PEER_LOCALMSPID="Org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/peers/peer0.org2.medrex.com/tls/ca.crt peer channel join -b mychannel.block

$ CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/users/Admin@org2.medrex.com/msp CORE_PEER_ADDRESS=peer1.org2.medrex.com:10051 CORE_PEER_LOCALMSPID="Org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/peers/peer1.org2.medrex.com/tls/ca.crt peer channel join -b mychannel.block

Updating anchor peers
$ peer channel update -o orderer.medrex.com:7050 -c $CHANNEL_NAME -f ./channel-artifacts/Org1MSPanchors.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/medrex.com/orderers/orderer.medrex.com/msp/tlscacerts/tlsca.medrex.com-cert.pem

$ CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/users/Admin@org2.medrex.com/msp CORE_PEER_ADDRESS=peer0.org2.medrex.com:9051 CORE_PEER_LOCALMSPID="Org2MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.medrex.com/peers/peer0.org2.medrex.com/tls/ca.crt peer channel update -o orderer.medrex.com:7050 -c $CHANNEL_NAME -f ./channel-artifacts/Org2MSPanchors.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/medrex.com/orderers/orderer.medrex.com/msp/tlscacerts/tlsca.medrex.com-cert.pem

# Errors
ERROR: cryptogen: no such command
SOLUTION:
Make sure your binaries are in the local path by opening ~/.bashrc or ~/.profile and adding the following line at the end

export PATH=~/fabric-samples/bin:$PATH

Then save and exit and execute source ~/.bashrc or source ~/.profile

ERROR: WARNING: Found orphan containers (ca.org2.medrex.com, ca.org1.medrex.com) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up.
SOLUTION: ??
