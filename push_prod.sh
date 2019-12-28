#!/usr/bin/env bash
rsync -avz ~/Documents/Pelori/pelori-website -e "ssh -i ../keys/osiris_test_vpn.pem" ubuntu@pelori.io:/home/ubuntu/ --exclude-from node_modules
