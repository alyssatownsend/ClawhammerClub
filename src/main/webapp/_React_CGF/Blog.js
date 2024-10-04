"use strict";
function Blog() {
  return (
    // jsx (xml)
    <div className="blog">
      <br />
      <br />
      <h1>Blog</h1>
      <div className="blogEntry">
        <h3>Server Page</h3>
        <p>
          Click{" "}
          <a href="hello" target="_blank">
            here
          </a>{" "}
          to see my published Server Side Page.
        </p>
      </div>

      <br />
      <div className="blogEntry">
        <h3>Proposed Database Table</h3>
        
        <a target="_blank" href="docs/townsend_database.pdf">
          My DB PDF
        </a>
        <p>
          The song_tab table stores information about the song tabs that users
          post, as well as the tab itself. The genre_list table corresonds an
          integer to a name of a music genre.
        </p>
        <ul>
          {" "}
          <h4>Song Tab Table Fields</h4>
          <li>song_tab_id (INT(11))-- required: a primary key for the table</li>
          <li>
            song_name (VARCHAR(200))-- required: a unique name for each song tab
          </li>
          <li>cover_img (VARCHAR(600))-- required: a url to a cover image</li>
          <li>
            tab_pdf (VARCHAR(600))-- required: a url to a pdf of the tablature
            sheet
          </li>
          <li>
            song_audio (VARCHAR(600))-- optional: a url to an audio file of the
            song being played
          </li>
          <li>
            song_video (VARCHAR(600))-- optional: a url to a video file of the
            song being played
          </li>
          <li>
            song_length (DECIMAL(4,2))-- optional: length of the song at
            recommended speed, written as MINUTES:SECONDS
          </li>
          <li>
            day_written (DATE)-- optional: the date that the song tab was
            finished
          </li>
          <li>
            genre_id (INT(1))-- required: an integer representing the genre of
            the song. It corresponds to the field genre_id in the genre_list
            table.
          </li>
          <li>
            web_user_id (INT(11))-- required: the ID of the poster. Corresponds
            to the web_user_id field in the web_user table.
          </li>
          <li>
            tab_notes (VARCHAR(2000))-- optional: textual notes about the song
            tab
          </li>
        </ul>
      </div>

      <br />

      <div className="blogEntry">
        <h3>My Database Experience</h3>
        <p>
          My database experience is basically null. However, I do have
          experience in encoding JSONs in Python and making API calls on said
          information in PHP/Laravel.
        </p>
      </div>

      <br />

      <div className="blogEntry">
        <h3>My Web Development Experience</h3>
        <p>
          My Capstone class made a web app, so I have experience with making API
          calls in Laravel (a PHP framework), running a Python Flask, and
          sending information in JSON format. I also documented said API in
          yaml.
        </p>
      </div>

      <br />

      <div className="blogEntry">
        <h3>HW 1 Home Page</h3>
        <p>
          The front-end portion of this homework was fairly straightforward. As
          could be expected given my lack of experience with DBMS generally and
          MySQLWorkbench in specific, there were a few small stops and starts
          with that section as I familiarized myself with the program--
          forgetting to ssh into the linux server before trying to access it in
          the GUI, finding the right window to check for a specific property of
          a table, etc. The introduction to MySQLWorkbench and the step-by-step
          instructiosn for the first two tables were quite valuable to me, as
          were the many example web pages in the tutorials section that show a
          bunch of different ways to format a web page.
        </p>
      </div>
      <br />

      <div className="blogEntry">
        <h3>HW 2 Database</h3>
        <p>
          My database experience is described above under the subheading 'My
          Database Experience'
        </p>
        <p>
          I was a bit confused about the order in which to do this homework, as
          I had done parts of it during the MySQLWorkbench tutorial. I found the
          instructions to use compound directives (WHERE... AND...) and the JOIN
          operation especially, as well as getting familiar with SQL directives
          in general, helpful. Overall, the homework seemed fairly
          straightforward to me, as I was following very specific instructions.
          However, it took some brainstorming to figure out how I wanted to
          store the tabs themselves. At first, I thought to do so as image
          files, becasue image files were already required in the posts.
          However, this caused problems for multi-page tabs. So, I decided to
          store the tabs as PDFs and make a cover image mandatory. This
          necessitated retaking several screenshots.
        </p>
        <br />
        <p>
          Click{" "}
          <a target="_blank" href="pics/townsend_database.pdf">
            here
          </a>{" "}
          to see my database document!
        </p>
      </div>
      <br />

      <div className="blogEntry">
        <h3>HW 3 Single Page Application</h3>
        <p>
          {" "}
          This lab really helped me familiarize myself with formatting and
          debugging React components and formatting a flexbox with the Live
          Server VSCode extension. The most difficult part was exactly that
          debugging practice-- locating where an error was coming from when the
          page wouldn't deploy locally. That said, the most time consuming
          single part of this homework was probably fiddling with margins,
          padding, and widths of elements.
        </p>
      </div>

      <div className="blogEntry">
        <h3>HW 4 JS Component</h3>
        <p>
          In the Homeworks-- JS Tab Objects area, if you mouseover the tabInfo component (title, picture) 
          the title will grow in size and the picture will sprout a border.
        </p>
      </div>
    </div>
  );
}
