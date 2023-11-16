# Use nginx as the base image
FROM nginx:alpine

# Remove the default nginx index page
RUN rm /usr/share/nginx/html/index.html

# Copy the custom HTML file to nginx's served directory
COPY index.html /usr/share/nginx/html/index.html

# The port the container will listen on
EXPOSE 80
