"use strict";

function Home() {
  return (
    // jsx (xml)
    <div className="homeColumn">
      <div className="homeRow">
        <h2>A Clawhammer Banjo Tab Library</h2>

        <p>
              This crowd-sourced repository allows users to submit and view
          clawhammer banjo song tabs! Each entry contains, in addition to the
          tabulature sheet itself, the song title and genre. Users can add
          details about the song or tab sheet, as well as video or audio of the
          song being played! For banjo players still learning the instrument or
          style, or for the experienced musician looking to expand their
          repertoire, the Clawhammer Club library can help. For the clawhammer
          arranger, the Clawhammer Club library provides a place to archive and
          share one's arrangements where they can be appreciated.
        </p>

        <p>
          Click{" "}
          <a href="hello" target="_blank">
            here
          </a>{" "}
          to see my published Server Side Page.
        </p>
      </div>

      <div className="homeRow">
      <img src="pics/gryphon_strings_banjo.webp"/>
      </div>
    </div>
  );
}
