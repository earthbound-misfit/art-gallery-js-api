// Declare our artwork values
let art;
let showArtInfo;

// function to get artwork info when image is clicked

/**
 * @param img_index
 * @param item_index
 * Function gets an artwork from Chicago Art Institute using the image index of our gallery.
 * Then it finds the item_index inside the JSON response data from Chicago Art Institute which will show the info for the selected artwork.
 */

// tree of life id: 38836
// monsters: 151424
// abstraction: 109447
// toward the unknown: 60259
// the lost city: 60257
// jardin: 40997

async function clickedEvent(img_index, p_index) {
  let artwork_id = document.getElementsByTagName('img')[img_index].attributes[3].value

  let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork_id}`)

  let response = await fetch(request);
  let info = await response.json();
  let title = info.data.title;
  let artist = info.data.artist_display;
  document.getElementById([p_index]).innerText = `${title}\n${artist}`
}

function getArtwork(id, event) {
  switch(id) {
    case 'fig1': {
      event.stopPropagation();
      clickedEvent(0, 'p1')
      break;
    }
    case 'fig2': {
      event.stopPropagation();
      clickedEvent(1, 'p2')
      break;
    }
    case 'fig3': {
      event.stopPropagation();
      clickedEvent(2, 'p3')
      break;
    }
    case 'fig4': {
      event.stopPropagation();
      clickedEvent(3, 'p4')
      break;
    }
    case 'fig5': {
      event.stopPropagation();
      clickedEvent(4, 'p5')
      break;
    }
    case 'fig6': {
      event.stopPropagation();
      clickedEvent(5, 'p6')
      break;
    }
  }
}