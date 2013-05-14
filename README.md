# jQuery Remove Uppercase Accents

Automatically removes accented characters (currently greek) from elements having
their text content uppercase transformed through CSS.

## Usage

The script operates automatically on the document ready event, by selecting all
the elements having their text content uppercase transformed through CSS, and by
replacing the accented characters in them by their respective non-accented.

The selection is based on the effective CSS rules defining the uppercase text
transformation, ie the following style rule:

    h1 { text-transform: uppercase; }

or

    .title { font-variant: small-caps; }

Currently the script transforms only greek text, but it can be easiy extended
to support other languages.

## Example

Just copy `jquery.remove-upcase-accents.js` on the same location as your HTML
file and include the following markup inside the <head> HTML element:

    <script type="text/javascript" src="jquery.remove-upcase-accents.js">

Copyright (c) 2012-2013 Nikolaos Anastopoulos, released under the GPLv3 license
