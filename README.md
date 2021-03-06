# web-design
This project describes my personal portfolio. In this design I tried to create a different layout with a strong hierarchy. I've chosen some principles of the "Principles of User Interface Design" by Joshua Porter [http://bokardo.com/principles-of-user-interface-design/](http://bokardo.com/principles-of-user-interface-design/), wich I'll descirbe later, that I've used to create a good design.
Before I descirbe what principles I have used I would like to describe the use case of my website.

## Use case
This project is based on giving the user information about me and about my work. Users can then contact me or just brows the website. A use case can be:

> A client wants to hire me and wants to check out more information about me.

If im following this use case I've decided to create a landing page with just information about me. This is, in my opinion, the most usable content a user can see. The only problem here is, the content has to be sticky. So I've decided to add a quote or a small text that describes my work in 3 sentences.

My second usecase will be with Larissa. Larissa a computer science student at the University of Applied Sciences in Amsterdam. The only problem with this use case, Larissa is blind. My biggest question was:

> A blind person wants to check out more information about me, and maybe hire me for an assignment.


## Principles
I've chosen these principles to create a good UI Design. All principles and quotes are written by Joshua Porter. I just describe how I used these principles in my design.

### 01. Clarity is job #1
> Clarity is the first and most important job of any interface. To be effective using an interface you've designed, people must be able to recognize what it is, care about why they would use it, understand what the interface is helping them interact with, predict what will happen when they use it, and then successfully interact with it. While there is room for mystery and delayed gratification in interfaces, there is no room for confusion. Clarity inspires confidence and leads to further use. One hundred clear screens is preferable to a single cluttered one.

Clarity is for me really import. If a user comes to your website, he must see directly what he can do on the website. He immediately can start browsing the website without hesitating. I've used this principle by creating big titles and big content blocks that draw the attention of the user.
This way the user can clearly see what the purpose is of these blocks and the website.

### 06. One primary action per screen
> Every screen we design should support a single action of real value to the person using it. This makes it easier to learn, easier to use, and easier to add to or build on when necessary. Screens that support two or more primary actions become confusing quickly. Like a written article should have a single, strong thesis, every screen we design should support a single, strong action that is its raison d'etre.

This principle I use the term screen as state. By this I mean each fase of a website (that doesn't have to be a other page).

Each state should have a different interaction and purpose. When you use more interactions then one at each screen a user can get disorientated or confused of his purpose. By giving the user just one interaction at each state you give the user the possiblity to focus on the most import action on the screen.

I've used this principle by creating large padding and only one action for each screen. This allows the user to brows the website by their needs.

### 08. Provide a natural next step
> Very few interactions are meant to be the last, so thoughtfully design a next step for each interaction a person has with your interface. Anticipate what the next interaction should be and design to support it. Just as we like in human conversation, provide an opening for further interaction. Don't leave a person hanging because they've done what you want them to do…give them a natural next step that helps them further achieve their goals.

After each step / state on a website you want to continue reading on the page. With these ideas I wanted to create my website. So after each project you find another project I've been working on. Each step you take would follow by a next step.


## Architecture
Each website should have a good structure. A link should always make sense and each filter must by usefull. Here I'll describe my choices of structure of my website. I'll start with the homepage and my choices.

### Home page
The home page should be providing information about me. I've devided this into the following order (ordered by logical hierarchy):

1. Biography
    1. Subtitle
    2. Name
    2. Images
    3. Small Intro text
    4. Quote
2. ~~Skills~~
3. ~~Work experience~~
2. Featured project
    1. Role
    2. Title
    3. Image (animation)
    4. Button

## Projects Page
1. Filter
    1. Date
    2. Role
    3. Code
        * WordPress
        * Node.JS
        * Concrete
        * Remaining
2. Project
    1. Role
    2. Title
    3. Image (animation)
    4. Button

### Detail page
1. Project
    1. Role
    2. Title
    3. Image (animation)
    4. Button

## Test
For this project I tested my website with Larissa. Larissa is blind and uses a screenreader to visit any website. Therefor I made all elements accessiable for all users. I tested the home page, project page and a detail page.

### Results
I've made a few notition during my test:

- Skip content is a good element
- She finds the information about me really fast
- Lost view in projects page
- Title of project page wasn't obvious
- Rol was niet helemaal duidelijk
- Too many headings
- Alt tag for image a bit too big

The funny part of these result is that I thought these problems wouldn't be a issue cause I tested this multiple times. But Larissa found them more difficult to understand. She also said I made a good strucutre but she didn't expect the page to have a good and logical structure.

For my next project I'll create less headings for each page. Larissa also said a page should have only one H1 title while each article could have a H1.

### Test 2
I also talked to Larissa after the test and I explained my idea and the structure of the page to her. She said to me that it made sense after I've explained it to her. She also said that she didn't expect it to make sense so she was confused the first time. She recommended a title attribute to explain the structure for blind users. 

## Feedback / To Do
While working on this project I got some feedback from my fellow students, teachers and users. I'll descirbe them here in a to do list.

- [x] **Name:**  More padding in some elements on the website
- [x] **Skills:** More padding in arrows
- [x] **Images:** More margin on images
- [x] **Images:** Make the images a bit smaller
- [ ] Lose all lorem ipsum text
- [ ] Check out more principles for the use cases
- [ ] Change flow of the home page
- [ ] Add a filter to the projects page
