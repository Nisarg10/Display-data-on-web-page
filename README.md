

a. What server framework did you choose and why?
      
            I choose ruby on rails for the server framework. One of the reason to use this is it is quite popular right now.       However, the main reason to choose this framework is I really wanted to know about the ruby language.

b. What client framework did you choose and why?

            I used jQuery for the client side framework. I used jQuery because I am little bit familiar with it as I have          used it in my previous projects.
      
c. What aspect of the implementation did you find easy, if any, and why?

            To load the data in the table from  json file as I have implemented this type of code already in my previous           project.
      
d. What aspect of the implementation did you find hard, if any, and why?

            I have found the Google map part for bonus point hard. I have problem of loading google map on web page. I have        tried many troubleshooting method. Then  I get sucess using Embed Google Map. However, It is not possible to  show           markers on the Embed Google Maps. Thus, I did not attempt the bonus part becuse I didn't figure out the solution.
      
e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your    solution?

            jRuby: It provides slightly more Windows freindly enviornment for Ruby app development.
            Heroku Toolbelt: This provides you access to the Heroku Command Line Interface (CLI), which can be used for                                    managing and scaling your applications and add-ons.
            PostgreSQl : It is recommended by Hroku to run same database locally during development.
      
f. What Ubuntu commands are required to deploy and run your server?

      To run app locally:
          1. heroku local web -f Procfile.windows 
                        This command allows app to run locally and also sets the config vars.
                        
      To deploy the app on web:
          1. git add .
                        This command adds the modified files to local git repositary.
          2. git commit -m "Demo"
                        This command commits the changes to the repositary.
          3. git push heroku master
                        deploy the app on the Heroku web server.
          4. Heroku open
                        we can see that everthing is working perfectly.
          
          
