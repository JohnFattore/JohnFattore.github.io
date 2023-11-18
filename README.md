# John Fattore's Stereo Speakers
#### Video Demo:  <URL HERE>
#### Description:

My final project for CS50x was jfattore.com, a website documenting my stereo speaker build. I started and fininshed both projects during the summer and so this crossover felt fitting. The website is made up of HTML, CSS, and Javascript code. I bought the domain and cloud hosting service from a website company. The project is uploaded to cPanel, the file manager for the cloud service. 

The website hosting service I purchased only supported static webpages. This means that I can't talk to a backend and dynamically create HTML pages like with Flask. However, HTML, CSS, and Javascript together are more than powerful enough to make an adequete webpage.

Bootstrap is a life saver when it comes to webpage styling. The line 
> <meta name="viewport" content="width=device-width, initial-scale=1">
is a powerful line that formats the page to fit whatever device the page is being viewed on. The line. To make sure the parts of the webpage is actually able to shrink and expand to fit the browser, the lines below are useful.
> <class="container-fluid"> and <img class="img-fluid">
container-fluid for div, and img-fluid for images

There is a bit of Javascript on the board foot calculator. The page takes in 3 arguements (length, width, thickness) and spits out the board foot calculation.

Some other software I used for this project are cPanel and git/Github. cPanel is a powerful file manager used with many cloud hosting services. First the folder where the website files should be placed needs to be found. In my case public.html was the folder name. Next, a zip file of all the code is uploaded and extracted. The homepage must be called index.html for cPanel to recognize it. Git is a very powerful tool in software development and so I made it a point to use it for this project. I uploaded the files to Github and then was able to access it anywhere. I could make changes to the files and then push and commit it to the origin so that I can see the changes anywhere. 
