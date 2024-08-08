FROM node:lts-iron
 
WORKDIR /nwokolo_uchechukwu_ui_garden/
 
COPY public/ /nwokolo_uchechukwu_ui_garden/public
COPY src/ /nwokolo_uchechukwu_ui_garden/src
COPY package.json /nwokolo_uchechukwu_ui_garden/
COPY . /nwokolo_uchechukwu_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]