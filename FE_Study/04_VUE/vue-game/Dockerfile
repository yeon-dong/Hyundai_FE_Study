#빌드 이미지로이미지로 node:20.17지정
FROM node:20.17 AS build
WORKDIR /app

#빌드 컨텍스트의 소스코드를 작업 디렉토리로 복사복사, 라이브러리 설치 및 빌드빌드
COPY . /app
RUN npm ci
RUN npm run build

#런타임 이미지로이미지로nginx latest, /usr/share/nginx/html 폴더에 권한 추가
FROM nginx:latest

#빌드 이미지에서 생성된생성된 dist 폴더를 nginx이미지로 복사
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]