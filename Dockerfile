# This Dockerfile uses a multi-stage build. Only the first stage requires
# all dependencies, the final image will contain only the output files

# First stage: Build project
FROM node as build

# Copy files and install dependencies
COPY ./ /
RUN npm install

# Build project
RUN npm run build


# Second stage: Server to deliver files
FROM node:alpine

# Install http server
RUN npm install --global --no-save http-server

# Port 8080 can be used as non root
EXPOSE 8080

# Create user with home directory and no password
RUN adduser -Dh /public server
USER server
WORKDIR /public

# Copy files from first stage
COPY --from=build /index.html /public/
COPY --from=build /dist /public/dist

# Run server (-g will automatically serve the gzipped files if possible)
CMD ["/usr/local/bin/http-server", "-g", "/public"]
