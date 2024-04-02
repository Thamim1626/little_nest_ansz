import { useState, useEffect, Fragment } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import HeaderTwo from './Component/Header/HeaderTwo'
import About from './Component/About'
import Events from './Component/Events'
import Contacts from './Component/Contacts'
import Footer from './Component/Footer';
import UpperFooter from './Component/Footer/upperFooter';
import ProductDetail from './Context';
import Cart from './Component/Cart';
const allProductList = [
  {
    id: 1,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Magic Show',
    price: '6000',
    miniDescription: `Experience the Magic: Delight Your Child's Birthday Party with a Magician!`,
    description: `Make your child's special day truly unforgettable by bringing
      the magic of a magician to their birthday party! Watch in
      awe as the magician performs mind-bending tricks, wowing
      the young audience with a sense of wonder and excitement.
      Laughter fills the air as children participate in interactive
      illusions, creating joyful memories that will be cherished for
      years to come. With a magician at the party, your child and
      their friends will experience the pure delight of being part
      of a magical adventure, where dreams come true and
      imaginations run wild.
      LITTLE SMILES EVENTS AND ENTERTAINMENT`
  },
  {
    id: 2,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Emcee/ Anchor',
    price: '6000',
    miniDescription: ` Spark the
      Celebration: Elevate
      Your Child's
      Birthday Party
      with a Charismatic
      Emcee!`,
    description: `Take your child's birthday party to the next level of excitement
      and entertainment by welcoming a dynamic emcee to the
      celebration! With their infectious energy and charismatic
      presence, the emcee becomes the heart and soul of the party,
      engaging young guests in a whirlwind of fun-filled activities, games,
      and laughter. They set the stage for an unforgettable experience,
      keeping the party atmosphere alive and ensuring every moment is
      filled with joy and enthusiasm. From leading interactive dances to
      hosting engaging contests, the emcee creates an atmosphere where
      children's laughter and smiles become the soundtrack of the day.
      With an emcee at your child's birthday party, you can sit back,
      relax, and witness the magic unfold as the celebration becomes an
      extraordinary event to remember.`
  },
  {
    id: 3,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Caricature Artist',
    price: '6000',
    miniDescription: `Unleash the Whimsy:
      Add a Caricature
      Artist to Your Child's
      Birthday Party!`,
    description: `Inject a touch of whimsical artistry into your child's birthday
      celebration by inviting a caricature artist to join the festivities!
      Witness the magic unfold as the artist skillfully captures each
      child's unique personality on paper, transforming them into
      delightful and hilarious caricatures. Laughter fills the air as kids
      eagerly line up, waiting their turn to see themselves transformed
      into whimsical cartoon versions. These personalized keepsakes
      become treasured mementos, reminding each child of the joyous
      moments shared at the party. With a caricature artist on hand,
      your child's birthday celebration will be filled with laughter,
      creativity, and a sense of whimsy that will leave an everlasting
      impression.`
  },
  {
    id: 4,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Balloon Modelling',
    price: '3000',
    miniDescription: `Unleash the Colorful
      Creativity: Enchant
      Your Child's
      Birthday Party with a
      Balloon Twister
      Artist!`,
    description: `Add a burst of vibrant whimsy to your child's birthday party by
      inviting a talented balloon twister artist to join the festivities!
      Watch in awe as they skillfully transform ordinary balloons into
      extraordinary works of art, bringing joy and wonder to the young
      guests. With a twist here and a twist there, the artist creates
      whimsical balloon animals, hats, swords, and more, leaving the
      children wide-eyed with excitement. The air is filled with laughter
      and anticipation as each child eagerly awaits their own customized
      balloon creation. From superheroes to princesses, the possibilities
      are endless, and every child gets to take home a unique and
      cherished keepsake. With a balloon twister artist at your child's
      birthday party, the celebration becomes a colorful carnival of
      imagination and delight, creating memories that will last a lifetime.`
  }, {
    id: 5,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Tattoo Artist',
    price: '3000',
    miniDescription: `Unleash the Temporary
      Ink: Delight Your
      Child's Birthday Party
      with a Ta too Artist!!`,
    description: `Ignite the spirit of creativity and self-expression at your child's
      birthday party by inviting a skilled tattoo artist to join the festivities!
      Watch as young partygoers eagerly line up, filled with excitement and
      curiosity, to choose from a selection of vibrant, temporary tattoos.
      With their steady hand and artistic flair, the tattoo artist brings to
      life a world of imaginative designs, transforming little arms and faces
      into colorful canvases of self-expression. From whimsical characters
      to dazzling symbols, each temporary tattoo becomes a badge of
      individuality and a cherished souvenir of the celebration. With a
      tattoo artist at your child's birthday party, you foster an atmosphere
      of artistic exploration, where children embrace their unique style and
      showcase their creativity. It's an opportunity for them to feel special,
      empowered, and part of a truly memorable experience that celebrates
      their individuality`
  }, {
    id: 6,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Chocolate Fountain',
    price: '4000',
    miniDescription: ` Indulge in Sweet
      Delights: Elevate Your
      Child's Birthday Party
      with a Chocolate Fountain
      Extravaganza!`,
    description: ` With a chocolate fountain at your child's birthday party, you elevate the
      celebration to a new level of decadence and enchantment. It's not just a
      dessert option; it's an interactive experience that adds a touch of
      indulgence and a dash of magic to the festivities. The sweet aroma, the
      gleaming fountain, and the joy of dipping and savoring irresistible treats
      create a truly unforgettable celebration that will leave a lasting impression
      on every young guest.
      So, treat your child and their friends to a delectable journey of chocolatey
      delight. Let the chocolate fountain with marshmallows, cake, and wafers
      become the centerpiece of the party, where laughter, smiles, and satisfied
      taste buds reign supreme. It's a mouthwatering adventure that will make
      your child's birthday party an unforgettable celebration of sweet
      memories`
  }, {
    id: 7,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Ice Gola',
    price: '5000',
    miniDescription: `Chill the
      Celebration:
      Delight Your
      Child's Birthday
      Party with Ice
      Gola!`,
    description: `Beat the heat and bring a refreshing twist to your child's birthday
      party with an Ice Gola station! Watch as children's eyes light up with
      anticipation as they witness blocks of ice transformed into colorful,
      flavor-packed delights. With a variety of syrups and toppings to
      choose from, they can create their own customized ice golas, tailor
     made to tickle their taste buds.
      The ice gola station becomes a hub of excitement and creativity as
      children experiment with different combinations and share their
      favorite flavor discoveries with their friends. The sheer joy of
      slurping on the ice gola, feeling the icy sensation melt on their
      tongues, adds a delightful sensory experience to the party.`
  }, {
    id: 8,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Pop Corn',
    price: '4000',
    miniDescription: `Popping Fun: Add
      a Popcorn Station to
      Your Child's
      Birthday Party!`,
    description: `Get ready to fill the air with the irresistible aroma of freshly popped
      popcorn at your child's birthday party! The sight and sound of kernels
      bursting into fluffy goodness will bring smiles and excitement to little
      faces. With a dedicated popcorn station, children can watch in awe as
      the popcorn machine works its magic, transforming humble kernels
      into a delightful and irresistible treat.
      So, get ready to make your child's birthday party pop! Let the popcorn
      station be a centerpiece of deliciousness, bringing smiles, laughter,
      and the satisfying crunch of popcorn to the celebration. It's a simple
      pleasure that adds a touch of delight to every bite and makes the
      party an unforgettable experience.`
  }, {
    id: 9,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Cotton Candy',
    price: '4000',
    miniDescription: `Sugar-Spun Delights:
      Sweeten Your Child's
      Birthday Party with
      Co ton Candy!`,
    description: `Infuse a whimsical touch into your child's birthday celebration with a
      cotton candy station! Watch as fluffy clouds of spun sugar are
      transformed into colorful, melt-in-your-mouth confections that
      captivate young hearts and taste buds. The twirling cotton candy
      machine becomes a mesmerizing centerpiece, drawing children in with
      its sweet aroma and enchanting display.
      With a cotton candy station at your child's birthday party, you add an
      element of nostalgia and pure delight. It's not just a sugary treat; it's
      an experience that sparks joy and creates moments of shared delight.
      The colorful, sugary clouds become the perfect backdrop for laughter,
      playfulness, and sweet memories.`
  }, {
    id: 10,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Bouncing Castle',
    price: '4000 - 10000',
    miniDescription: `Jump into Fun:
      Elevate Your Child's
      Birthday Party
      with a Bouncing Castle`,
    description: `Transform your child's birthday party into an exciting playground of
      laughter and boundless energy by featuring a bouncing castle! Watch as
      little ones' eyes light up with joy at the sight of this inflatable
      wonderland, inviting them to bounce, tumble, and leap to their hearts'
      content.
      Having a bouncing castle at your child's birthday party creates an
      atmosphere of pure fun and exhilaration. It's not just an inflatable
      structure; it's a playground of endless possibilities, where laughter echoes
      through the air and the spirit of childhood comes alive.
      So, prepare to let the bouncing castle be the star of your child's birthday
      party. Let the laughter, smiles, and uninhibited play create memories that
      will last a lifetime. It's a bouncing, leaping, and joy-filled experience that
      will make your child's special day an extraordinary celebration of pure fun.`
  }, {
    id: 11,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Trampoline',
    price: '8000',
    miniDescription: `Soar to New Heights:
      Take Your Child's
      Birthday Party to the
      Next Level with a
      Trampoline!`,
    description: `Elevate the excitement and create an unforgettable experience for your
      child's birthday party by featuring a trampoline! Watch as young
      adventurers bounce, leap, and defy gravity, their spirits soaring to new
      heights..
      Having a trampoline at your child's birthday party creates an atmosphere
      of pure fun and adventure. It's not just a piece of equipment; it's a portal
      to a world of boundless energy and exhilaration. The shared moments of
      excitement and the sense of accomplishment that come with each jump
      become cherished memories that last a lifetime.
      So, get ready to let your child's birthday party take flight. Let the
      trampoline be a catalyst for laughter, courage, and unforgettable moments.
      It's a soaring experience that will make your child's special day an
      extraordinary celebration of joy and boundless enthusiasm.`
  }, {
    id: 12,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Pottery',
    price: '5000',
    miniDescription: `Unleash Creativity:
      Ignite Your Child's
      Birthday Party with
      Po tery Fun!`,
    description: `Transform your child's birthday party into a hands-on, artistic adventure
      by incorporating a pottery activity! Watch as young imaginations come to
      life, and little hands eagerly mold and shape clay into unique, personalized
      masterpieces.
      The pottery station becomes a creative haven, where children immerse
      themselves in the tactile joy of working with clay. As they delve into the
      art of pottery, their focus deepens, and their expressions of
      concentration turn into wide smiles of accomplishment.
      Having a pottery activity at your child's birthday party adds an element of
      artistic exploration and hands-on engagement. It's not just a craft; it's an
      opportunity for children to connect with their creative side, express
      themselves, and take home a cherished memento of their celebration.`
  }, {
    id: 13,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Tarot Card Reader',
    price: '8000',
    miniDescription: `Unveiling the Mysteries:
      Add an Element of
      Wonder to Your Child's
      Birthday Party with a
      Tarot Card
      Reader!Fun!`,
    description: `Step into a world of intrigue and enchantment by inviting a tarot card
      reader to your child's birthday party. Witness the sense of wonder that
      fills the air as young guests gather around, eager to experience a glimpse
      into the mystical realm of tarot.
      Having a tarot card reader at your child's birthday party adds an element
      of fascination and encourages open-mindedness. It's not about predicting
      the future but about fostering a sense of curiosity, imagination, and self
     awareness. The tarot card reading becomes a conversation starter, a spark
      for deeper discussions, and an opportunity for children to explore the
      world of symbols and intuition.`
  }, {
    id: 14,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Nail Artist',
    price: '5000',
    miniDescription: `Nail Art Extravaganza:
      Elevate Your Child's
      Birthday Party with a
      Talented Nail Artist!`,
    description: `Add a touch of glamour and creativity to your child's birthday party by
      featuring a skilled nail artist! Watch as little hands transform into mini
      canvases of color and design, as the nail artist works their magic, creating
      stunning nail art that dazzles and delights.
      With a wide array of nail polish colors, glitter, and playful designs to
      choose from, children eagerly line up for their turn in the nail artist's
      chair. Each nail becomes a masterpiece, adorned with vibrant colors, cute
      patterns, and sparkling accents, reflecting each child's unique personality
      and style.
      Having a nail artist at your child's birthday party creates an atmosphere
      of beauty, glamour, and self-confidence. It's not just about pretty nails;
      it's about fostering a sense of individuality, creativity, and self-care. The
      nail art experience becomes a cherished memory and a way for children to
      express their personal style.`
  }, {
    id: 15,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Pebble Artist',
    price: '5000',
    miniDescription: `Pebble Art for Kids—where every celebration
      becomes a canvas for endless imaginationg!`,
    description: `Transform your child's birthday celebration into a hands-on
      masterpiece with Pebble Art for Kids! Our engaging and
      imaginative activity brings a unique twist to the party, allowing
      young artists to create personalized pebble masterpieces.
      Watch as their creativity comes to life, turning ordinary
      stones into vibrant characters, animals, and more. It's a
      delightful blend of artistry and fun that adds a memorable
      touch to your little one's special day. Let the birthday child
      and their friends embark on a pebble-painting adventure,
      turning each small stone into a lasting memento of joy and
      creativity.`
  }, {
    id: 16,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Balloon Shooting',
    price: '4000',
    miniDescription: `Bursting with Excitement: Add Thrills and Laughter to
      Your Child's Birthday Party with Balloon Shooting!`,
    description: ` Infuse your child's birthday party with a dash of competitive fun by
      introducing a balloon shooting activity! Watch as young marksmen take aim and
      delight in bursting colorful balloons with foam dart guns or water guns, igniting
      laughter and cheers throughout the celebration.
      The balloon shooting station becomes a hub of friendly competition, where
      children test their aim and coordination. With each successful shot, their
      confidence soars, and the joy of victory fills the air. The sound of popping
      balloons becomes music to their ears, and their smiles grow wider with each
      burst.
      Having a balloon shooting activity at your child's birthday party adds an
      element of excitement, teamwork, and coordination. It's not just about
      bursting balloons; it's about fostering sportsmanship, friendly rivalry, and the
      joy of achieving goals together. The balloon shooting experience creates
      memories of shared laughter, camaraderie, and moments of triumph.`
  }, {
    id: 17,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Archery',
    price: '4000',
    miniDescription: `Let the a rows fly and the birthday festivities hit the
      target of joy with our Archery Stall Game for Kids`,
    description: `Step into the realm of adventure at your child's birthday
      party with our Archery Stall Game! This thrilling activity
      brings the excitement of archery to the celebration, as
      little ones take aim and unleash their inner archers. With
      safe, child-friendly equipment, our archery stall offers a
      fun and engaging experience that encourages focus,
      coordination, and friendly competition.`
  }, {
    id: 18,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Cartoon Characters',
    price: '3000',
    miniDescription: `Immerse in Magical
      Wonder: Bring Beloved
      Cartoon Characters to
      Life at Your Child's
      Birthday Party!`,
    description: `Create an enchanting world of imagination and wonder by inviting beloved
      cartoon characters like Mickey Mouse, Chota Bheem, Doraemon, and more to
      your child's birthday party! Watch as young faces light up with joy and
      excitement upon meeting their favorite characters in person.
      As the characters interact with the children, laughter fills the air, and young
      imaginations come alive. From dance-offs to high-fives, the joy of meeting
      their cartoon heroes becomes an experience that children will cherish for a
      lifetime.
      Having cartoon characters at your child's birthday party creates an
      atmosphere of excitement, joy, and awe. It's not just about meeting a
      character; it's about bringing cherished cartoons to life, fostering a sense of
      wonder and creating magical memories`
  }, {
    id: 19,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Photography',
    price: '8500',
    miniDescription: `Candid moments captured with love, turning birthdays into timeless memories.`,
    description: ` From candid shots of children's laughter to group pictures
      showcasing the camaraderie among little friends, the
      photographs serve as cherished keepsakes that can be
      cherished for years to come. The photographer's keen eye
      also captures the intricate details of the party decor, the
      vibrant colors of balloons, and the delightfully decorated cake,
      preserving the efforts put into planning and organizing the
      event`
  }, {
    id: 20,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Videography',
    price: '12000',
    miniDescription: `Vibrant video storytelling, encapsulating every birthday moment in cinematic brilliance.`,
    description: `Through the lens of the videographer, the essence of the party
      comes to life, showcasing the genuine emotions and uninhibited joy of
      the children as they partake in various games, dances, and activities.
      From the excitement of blowing out the candles to the delight of
      unwrapping gifts, every heartfelt moment is skillfully recorded.
      The video also becomes a fantastic way to share the celebration with
      friends and relatives who couldn't attend, enabling them to feel a
      part of the festivities from afar. Whether it's a traditional family
      gathering or a themed extravaganza, the videographer's artistry
      ensures that the essence of the kids' birthday party is preserved in a
      timeless and captivating manner.`
  }, {
    id: 21,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Key Chain Making',
    price: '5000',
    miniDescription: `Key Chain Making – where every creation unlocks a world
      of joyful celebration!`,
    description: `Unlock the creativity at your child's birthday celebration with our
      Key Chain Making activity! Elevate the fun factor as young
      partygoers delve into the world of craftsmanship, creating
      personalized keychains that double as cherished keepsakes. Our
      crafting station is a hands-on haven where kids select their
      favorite colors, shapes, and charms, fashioning unique keychains to
      showcase their individual style`
  }, {
    id: 22,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Bubble Show',
    price: '25000',
    miniDescription: `Make your child's birthday a bubbling su cess with our
      captivating Bubble Show!`,
    description: ` Elevate the fun quotient at your child's birthday extravaganza with our
      mesmerizing Bubble Show! Immerse the celebration in a world of shimmering
      spheres and whimsical wonders as our skilled bubble artists perform
      breathtaking tricks and create enchanting bubble artistry. Delightful,
      dynamic, and full of laughter, the Bubble Show captivates kids of all ages,
      turning the ordinary into the extraordinary. Picture the joy as colorful
      bubbles dance through the air, creating an atmosphere of magic and
      excitement`
  }, {
    id: 23,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Puppet Show',
    price: '8000',
    miniDescription: `Bring the joy of puppetry to your party and watch the smiles
      and stories unfold!`,
    description: ` Let the enchantment begin at your child's birthday bash with
      Puppet Making for Kids! Our delightful activity turns the party
      into a puppeteer's paradise, where little hands transform ordinary
      materials into whimsical characters that come to life. Children are
      invited to unleash their creativity, selecting fabrics, colors, and
      accessories to craft their very own puppet pals. The excitement
      builds as these handmade friends take center stage, sparking
      imaginative play and storytelling.`
  }, {
    id: 24,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Sand Art Bottles',
    price: '7000',
    miniDescription: `Watch the celebration come alive with the magic of Sand
      Art Bo tle Crafting!`,
    description: ` Unleash the artistic spirit at your child's birthday bash
      with Sand Art Bottle Crafting! Our engaging activity turns
      ordinary bottles into vibrant masterpieces as little hands
      layer and pour colorful sands to create personalized
      designs. Kids get to choose from a kaleidoscope of hues,
      bringing their imaginations to life in each carefully
      crafted bottle. It's more than just an art project; it's a
      celebration of creativity and self-expression`
  }, {
    id: 25,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Turkish Ice Cream',
    price: '11000',
    miniDescription: `Bring the magic of Turkey to the party with every scoop of
      our whimsical and delicious Turkish Ice Cream`,
    description: ` Add a playful twist to your child's birthday festivities with
      Turkish Ice Cream Delight! Our entertaining and delectable
      experience brings the charm of traditional Turkish ice cream to
      the party, captivating kids and parents alike. Picture the joy as our
      skilled ice cream vendors perform delightful tricks, showcasing
      the unique stretchy and chewy texture of Turkish ice cream. Not
      only is it a treat for the taste buds, but the entertaining show will
      also leave everyone smiling. With a variety of flavors to choose
      from, Turkish Ice Cream for Kids adds an extra layer of fun and
      flavor to your little one's special day
      LITTLE SMILES EVENTS AND ENTERTAINMENT
      `
  }, {
    id: 26,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Potato Twister',
    price: '8500',
    miniDescription: `It's a deliciously fun way for kids to indulge in a
      delightful twist of flavors and create memories of a birthday
      bash that's both tasty and unforge table`,
    description: `Add a twist of fun to your child's birthday party with our
      Potato Twister Station! Watch as the ordinary potato
      transforms into a delectable spiral delight, creating a
      unique and tasty treat for all party attendees. Kids get to
      customize their potato twisters with a variety of flavorful
      seasonings, turning snack time into a savory adventure.`
  }, {
    id: 27,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Pani Puri',
    price: '9000',
    miniDescription: `Bring the authentic taste of Pani Puri to your child's
      special day and let the festivities unfold with each
      delightful and delicious bite!`,
    description: ` Turn your child's birthday into a flavor-filled fiesta with
      our Pani Puri Delight! Experience the joy of bite-sized
      explosions of taste as little ones embark on a culinary
      adventure with these beloved Indian street snacks. Our
      Pani Puri station brings an interactive and delicious twist
      to the party, allowing kids to fill their own crispy puris
      with a medley of mouthwatering fillings and tangy,
      flavorful pani (spiced water).
      LITTLE SMILES EVENTS AND ENTERTAINMENT
     `
  }, {
    id: 28,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Clay Making',
    price: '5000',
    miniDescription: ` Let the birthday celebration be a hands-on adventure with
      our enchanting Clay Making for Kids!`,
    description: ` Elevate your child's birthday bash with our Clay Making
      Corner, where imagination takes shape! Little hands dive
      into the world of creativity as kids mold, shape, and sculpt
      their own miniature masterpieces. Our clay crafting
      station is a hub of artistic exploration, allowing each child
      to bring their unique ideas to life. From whimsical
      creatures to tiny treasures, the possibilities are endless. `
  }, {
    id: 29,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: '360 Degree Video',
    price: '20000',
    miniDescription: `360-degree video immersion, capturing the birthday celebration from every breathtaking angle.`,
    description: `Transform your birthday celebration into an
      unforgettable experience with our cutting-edge 360
     degree video setup! Our state-of-the-art technology
      will capture every moment of your special day from
      every angle, allowing you to relive the joy and
      excitement for years to come.`
  }, {
    id: 30,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Instant Photography',
    price: '15000',
    miniDescription: `Elevate your family birthday party experience with Instant
      Photography and Frames—where every click frames a memory`,
    description: `Make every family moment picture-perfect at your
      next birthday celebration with our Instant
      Photography and Frames activity! Transform the
      gathering into a joyous photo affair as family
      members become instant photographers, capturing
      special moments with the click of a button. Our
      instant cameras provide instant gratification,
      producing tangible memories that last a lifetime.`
  }, {
    id: 31,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Juggling',
    price: '8000',
    miniDescription: `Turn your child's birthday into a juggling jubilee and let
      the laughter and amazement take center stage!`,
    description: `Elevate the excitement at your child's birthday
      celebration with our Juggling Extravaganza! Witness the
      wonder as our skilled jugglers mesmerize young
      partygoers with a dazzling display of tosses, twirls, and
      tricks. The party transforms into a circus-inspired
      spectacle, filled with laughter.`
  }, {
    id: 32,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Clown',
    price: '7500',
    miniDescription: `Let the laughter echo and the celebration sparkle with the playful presence
      of our Clown, turning your child's birthday into a carnival of happiness`,
    description: ` Bring laughter and joy to your child's birthday celebration with
      the whimsical charm of our delightful Clown! Watch as the
      party comes alive with colorful antics, silly surprises, and
      hilarious entertainment that captivates kids of all ages. Our
      friendly clown is not just a performer but a magical storyteller,
      balloon artist, and face-painting maestro, creating a festive
      atmosphere that turns every frown upside down.`
  }, {
    id: 33,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Dwarf Jokers',
    price: '5000',
    miniDescription: `Let the magical moments unfold with the delightful presence
      of our Dwarf Clown!`,
    description: ` Introducing our charming Dwarf Clown to add a touch
      of whimsy and wonder to your child's birthday bash!
      This pint-sized performer brings big smiles and
      endless laughter as they entertain with playful antics,
      magical tricks, and delightful interactions. Our Dwarf
      Clown is not just a showstopper but also a master of
      mini-sized enchantment, creating an intimate and
      magical experience for the little ones.`
  }, {
    id: 34,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Ventriloquist',
    price: '9000',
    miniDescription: `Bring the magic of storytelling and laughter to your child's
      special day with the captivating presence of our
      Ventriloquist, where every puppet whispers a tale of joy!`,
    description: ` Add a touch of enchantment to your child's birthday
      celebration with our talented Ventriloquist! Prepare
      to be amazed as our skilled performer brings
      whimsical characters to life, captivating young
      imaginations with a magical blend of comedy and
      puppetry`
  }, {
    id: 35,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Ball Pool',
    price: '7000',
    miniDescription: `Let the birthday festivities bounce to new heights as children
      enjoy the simple pleasure of a ball pool – a perfect addition
      to turn your child's special day into a playtime paradise`,
    description: ` Dive into the excitement at your child's birthday party with
      our vibrant Ball Pool! A sea of colorful balls awaits the little
      ones, creating an oasis of fun and laughter. Watch as the
      kids immerse themselves in a world of play, diving, bouncing,
      and making memories in this delightful pool of joy. `
  }, {
    id: 36,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Slime Making',
    price: '6000',
    miniDescription: `Watch the party come alive with the squishy satisfaction of our Slime
      Making for Kids, where every slime tells a tale of birthday joy`,
    description: ` Get ready for a slimy adventure at your child's
      birthday bash with our Slime Making Extravaganza!
      Unleash the creativity as little hands dive into the
      world of ooey-gooey fun, concocting their own unique
      slimes in a rainbow of colors and textures. `
  }, {
    id: 37,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Hair Braiding',
    price: '5000',
    miniDescription: `Let the festivities weave together with joy and creativity at
      our Hair Braiding for Kids station, turning every child
      into the star of the party!`,
    description: `Add a touch of glamour to your child's birthday
      celebration with our Hair Braiding Station! Watch as
      little ones transform into princesses and
      superheroes, choosing from an array of colorful
      ribbons, beads, and braids to create their own unique
      hairstyle.`
  }, {
    id: 38,
    imageUrl: 'https://townsquare.media/site/508/files/2020/01/magician.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
    eventName: 'Science Experiments',
    price: '20000',
    miniDescription: `Make your child's birthday a memorable and educational
      experience with our captivating Science Experiments for Kids!`,
    description: `Transform your child's birthday celebration into a world
      of wonder with our Science Experiment Extravaganza!
      Step into the shoes of young scientists as partygoers
      engage in interactive and awe-inspiring experiments that
      blend education with entertainment. From colorful
      chemical reactions to magical potions, each experiment
      sparks curiosity and excitement.`
  },
]
const prevItemData = localStorage.getItem('cartToken') !== null ? JSON.parse(localStorage.getItem('cartToken')) : []
function App() {
  const [count, setCount] = useState(0)
  const [cartList, updatecartList] = useState(prevItemData)
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {

      const scrollY = window.scrollY;
      setShowHeader(scrollY <= 120);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const removeDuplicatesById = (arr) => {
    // Create an empty map to store unique objects based on id
    const map = new Map();
    // Iterate over each object in the array
    arr.forEach(obj => {
      // Check if the map doesn't have an entry with the current object's id
      if (!map.has(obj.id)) {
        // If not, add the object to the map
        map.set(obj.id, obj);
      }
    });
    // Return an array of values (unique objects) from the map
    return Array.from(map.values());
  };

  const addCartItem = (id) => {
    // const prevItemData = localStorage.getItem('cartToken') !== null ? JSON.parse(localStorage.getItem('cartToken')) : []
    const eventItemFromId = allProductList.filter((item) => (item.id === id))
    const checkIdAlreadyIn = cartList.filter((items) => (items.id === id))


    const joinAllCartItem = [...cartList, eventItemFromId[0]]
    const originalArray = removeDuplicatesById(joinAllCartItem)
    updatecartList([...originalArray])
    const stringifyjoinAllCartItem = JSON.stringify(originalArray)
    localStorage.setItem('cartToken', stringifyjoinAllCartItem)

  }
  const removeCartItem = (id) => {
    const removeCartItem = cartList.filter((eachItem) => (
      id !== eachItem.id
    ))
    updatecartList(removeCartItem)
    const stringifyjoinAllCartItem = JSON.stringify(removeCartItem)
    localStorage.setItem('cartToken', stringifyjoinAllCartItem)
  }
  return (
    <div className='main-app' >

      <BrowserRouter>
        <ProductDetail.Provider value={{
          addCartItem,
          removeCartItem: removeCartItem,
          allProductList: allProductList, cartList
        }}>

          <Header />
          {!showHeader && <div className='fixed-header'><HeaderTwo /></div>}
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/contacts' element={<Contacts />} />
            <Route exact path='/cartlist' element={<Cart />} />

          </Routes>

          <Footer />
        </ProductDetail.Provider>

      </BrowserRouter>


    </div>
  )
}

export default App
