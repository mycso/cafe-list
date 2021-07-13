# "Dancing Goats Cafe" Interview Task

Dancing Goat Cafe is the name of a fictitious coffee company. You are to finish implementing the site and make some corrections. This React application is the front-end to a Kentico CMS hosted site. The integration with Kentico Kontent (the headless-CMS system) has been implemented already, so no specific knowledge is required. The application needs completing and fixing.


## Building and running the code locally
Download, or use git clone.

Download dependencies by navigating to the frontendinterviewtask folder in a terminal and running `yarn`

Once that is finished, start the dev server locally using `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Task
There are 2 parts to task, which shouldn't take more than about an hour to complete. Feel free to fork the repo, or clone & host it elsewhere with your fixes.

#### Part 1
Implement a component to display the individual cafes. It should match the style for the site. **The site needs to be responsive**, ie the layout of the site should adapt to the width of the display. You *may* need to modify other components to achieve this.

Note: You don't have to use the 3rd-party material-ui library, if it is easier not to. Use whatever techniques you find easiest, or more appropriate for the task.

#### Part 2 
Fix 2 bugs:

* There is some junk data being returned from the API: cafes without complete address information. These need to be filtered/pruned.
* The social media buttons on the footer should be centered on the page.

#### Optional Improvements
If you have any time remaining, see if there are any further improvements you could make to the site, or things that could be added or fixed. For example, use the GoogleMap dummy component to display a map to a cafe, add animation, or improve the styling of the site.
