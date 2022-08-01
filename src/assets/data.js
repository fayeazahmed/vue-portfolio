export default [
    {
        id: 1,
        section: "WEB",
        title: "Blood Locator (Mapbox API)",
        image: ["React", "Node", "Mongo"],
        link: "https://bloodlocatorbd.herokuapp.com/",
        ss: "blood.PNG",
        git: "https://github.com/fayeazahmed/blood-locator",
        description:
            "My first complete full stack app using MERN. Here one can find blood donor for specific blood group in the map (using MAPBOX api), and also add their own entry to the database. Simple, but usable.",
    },
    {
        id: 2,
        section: "WEB",
        title: "E-Commerce React",
        image: ["React", "Django", "PostgreSQL"],
        link: "https://fayeazahmed.github.io/notchaldal/index.html",
        ss: "notchaldal.png",
        git: "https://github.com/fayeazahmed/notchaldal",
        description:
            "E-commerce web app, with django as backend taking care of postgresql migrations, and react on front. This is a somewhat repica of Chaldal.com which is a great site to order everyday stuff. This is quite a full stack project for my current caliber. Accounts can be created by users, orders and ordered products are added to their databases and relations established with foreign keys. If 10 orders are done from an account, it will get 10% discount on next orders. Django restapi and their authentication system is used. In the front end, react with react-router and redux were used. Product adding can be done from django admin dashboard, although as the server is hosted on heroku, new images can't be added as heroku don't provide static file storage. So I just added 2/3 products per category, as this is just a demonstration.",
    },
    {
        id: 3,
        section: "WEB",
        title: "Social Media using Firebase",
        image: ["React", "Node", "PostgreSQL"],
        link: "https://fayeazahmed.github.io/just-another-social-media/#/",
        ss: "socialmedia.PNG",
        git: "https://github.com/fayeazahmed/just-another-social-media",
        description:
            "ExpressJS and Postgres is used in the server, and React in client (PERN). So basically we can create an account with some basic information, follow other accounts, create posts optionally with photo, and add like or comment to a post. Feed will serve the contents posted by the user's account and the accounts that are being 'followed' by the user. Profile will contain only the user's posts. You can delete a post if it's made by you, and delete a comment if it's made by you or it belongs to a post made by you. Also Firebase storage is used to store profile pictures and post photos. It's not a huge thing, but probably I learned the MOST till now creating this project.",
    },
    {
        id: 4,
        section: "WEB",
        title: "E-Commerce Laravel",
        image: ["Laravel", "PostgreSQL"],
        link: "https://laravel-techshop.herokuapp.com/",
        ss: "techshop.PNG",
        git: "https://github.com/fayeazahmed/laravel-techshop",
        description:
            "Hello, this is Ahmed. It's a personal project e-commerce app. I learnt building similar website before, but now the main focus was to create a full functioning admin dashboard. So the customer end works in the regular way. You create account, add products to cart and checkout. There are category wise product pages and options to filter by price. There is account page to edit user info and see all order details. In admin area, you can create new categories and add new products. Existing categories and products can be modified or deleted. Also the details of all orders and users can be seen. Admin can add or remove from the list of featured products to feature in homepage. All product data is scraped from StarTech.",
    },
    {
        id: 5,
        section: "WEB",
        title: "Jira Lite",
        image: ["React", "Node", "Mongo"],
        link: "https://jirasofter.herokuapp.com/",
        ss: "jira.PNG",
        git: "https://github.com/fayeazahmed/jira-softer",
        description:
            "Jira SoftER is basically a very light version of Jira. I thought this would be the best project to demonstrate all the things I learned through full stack development journey and use all techniques most efficiently with the experience I had till now. I tried to remake the agile development part of Jira. You can create account then create a team or get added to other teams in order to assign issues to others or get assigned yourself. Project lead can create or modify issues and assign them to team members. There is backlog for all issues, sprint for creating a sprint with some issues and roadmap for tracking all the epics and sub-issues under them including the completion percentage.",
    },
];
