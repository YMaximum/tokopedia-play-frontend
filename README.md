# TOKOPEDIA PLAY (FRONTEND)

This repo provides frontend code for Tokopedia Play clone project in Generasi Gigih 3.0 created by Naufal Yassar. You can access the site here :
https://gg3yassar-tokopedia-play-fe.vercel.app/

## FEATURES

### Home page
- User can see video list with thumbnail from YouTube in home page.
- User can click each video and go to video detail page.
- User can see the navbar on top of the home page
- The navbar provides following features:
    - The `Tokopedia Play` text will bring you to the home page whenever it clicked
    - The `search input`.
    - Login button
    - Register button

### Login and Register
- User can make an account by clicking `Register` button. A modal will be shown which user can input username and password there. 
- User can't register with `username` that has already been taken. The `username` is case sensitive and still takes any characters and whitespace.
- User need to enter at least 8 characters for the password.
- User can login by clicking on `Login` button whenever user have the account.
- User can refresh the page without logging it out of the site.

### Logged in User Additional Features
- If user has already logged in, user can see his/her `avatar and name` on top right of the home page (on the navbar)
- User can click the avatar and name. If clicked, a menu will be popped with these options :
    - `Add Video`
    - `Add Products`
    - `Delete Video`
    - `Logout`

### Add Video
- User can add video by inputting these data:
    - `Title` of the video.
    - `Thumbnail Url` of the video. User can get this thumbnail by inspecting it in youtube.
    - `Embed VIDEO_ID` from youtube. User can get it by clicking the video that user want to upload. In the url window, user will see something like this https://www.youtube.com/watch?v=iBNTkazW9OI for example. Copy what comes after `v=` in this example, the value will be `iBNTkazW9OI`. That will be the input.
    - `Category`, user will choose one of the provided category for the video.
    - `Deal`, user can input the deal for the products inside the video (if there any). For example `Discount up to 87%` or `Flash sale`, etc.
- Once the user filled all the necessary input, user can click the `Add` button, to upload the video into the database. User can see the uploaded video in the home page.

### Add Product
- User can add product into the video that the user uploaded by inputting these data:
    - `Select video` that you want to add your product to.
    - Enter the product `Title`.
    - Enter `Product URL` which lead to the product.
    - Enter `Thumbnail URL` which will be shown inside the video detail. It can be the image url for the product.
    - Enter the product `Price` in Rupiah or IDR.
- Once the user filled all the necessary input, user can click the `Add` button, to upload the product into the database. User can see the uploaded video in the `video detail` of the selected video (user can just click the video).

### Delete Video
- User can delete the video that the user already uploaded by selecting it from the list

### Video Detail Page
- Once user clicked one of the video from the home page, user will be moved to the `video detail` page.
- The `video detail` page provides the embed of youtube video. User can play the youtube video.
- User can see the `products` that has already been added.
- User can click those products, which lead user to the product's page.
- User can comment by inputting username and comment. If the user is already logged in, the user only needs to input comments.
- User can see the comment in the comment list once user click the `comment` button

### Search Feature
- User can search for videos that are available in the database. 
- User need to input at least `3 characters` of the `video title`.
- Once the user press `enter` key or click `search button` user will be moved to `search result` page.
- User will see the video list based on their `search query`. If there is no video shown, that means no title matches the user search query.

## HOW TO RUN IN LOCAL

1. Setup and run the backend server by following the guide on https://github.com/YMaximum/tokopedia-play-backend2

2. Download the code for `frontend` or clone the repository

    ```bash
    git clone https://github.com/YMaximum/tokopedia-play-frontend.git
    ```
3. Install dependencies

    ```bash
    npm install
    ```
4. Create `.env` file with following content:

    ```
    REACT_APP_BACKEND_URL=
    ```
    No need to put anything into REAC_APP_BACKEND_URL. Just make it like above.

5. Add 
    ```bash
    "proxy": "http://localhost:YOUR_BACKEND_PORT"
    ```
    to your `package.json`. Change `YOUR_BACKEND_PORT` with your defined port for running backend server. If you run your backend server at port `3080` then you can write it as below:
    ```bash
    "proxy": "http://localhost:3080"
    ```
6. Run the app

    ```bash
    npm start
    ```

7. The app will run on

    ```
    http://localhost:3000
    ```

## CONTACT

Kindly reach out to me through my email : *yassarnaufal@gmail.com*
