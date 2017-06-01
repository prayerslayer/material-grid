# material-grid

Responsive grid following[1] the [Material Design spec](https://material.io/guidelines/layout/responsive-ui.html). Also "Bootstrap compatible" in the sense that it's built on flexbox (you can use all of Bootstrap's flexbox utility classes) and has the same class names.

[https://prayerslayer.github.io/material-grid](https://prayerslayer.github.io/material-grid)

*Size: 12.1 KB minified, 1.2 KB gzipped*

## Why not use the Bootstrap grid

The bootstrap grid has always 12 columns, whereas the material design grid has sometimes 8. You can't have 1/8 of 12 columns. Also in boostrap the gutter is the same for all screen sizes and not correct on the outer edges, where it's 1/2 of the specified gutter.

### Differences to Bootstrap grid

While we're talking about the Bootstrap grid:

* Bootstrap grid is tested on many devices and browsers (I hope), this is definitely not! Use at own risk.
* Bootstrap has `container` and `container-fluid`, this grid only `container-fluid`
* Bootstrap has variable-width columns, this doesn't as you're not allowed to break the grid
* Flexboy utility classes from BS like `align-self-start` should be usable here (not verified)
* Nesting of rows is allowed in BS, here it's undefined behavior but should mostly work (not verified)

## Ok, why/when should I use this

* Yes: If you **really** care about following material design
* No: When you're fine with compromises, eg you could use the bootstrap grid by picking in-between gutter size and a convention to not use column sizes that aren't allowed by material design.

## Installation

Copy `dist/grid.css` for now. Please open an issue if you're really using this, then I will do something about npm.

## Usage

Most simple example:

~~~ html
<--! everything must be in a container -->
<div class="container">
  <-- rows contain columns and columns only -->
  <div class="row">
    <-- columns contain content -->
    <div class="col-md-6">
      Hello world!
    </div>
  </div>
</div>
~~~

Available breakpoints:

* `xs`: >= 0 px, 4 columns grid, 16px gutter
* `sm`: >= 600px, 8 columns grid, 16px gutter
* `md`: >= 960px, 8 columns grid, 24px gutter
* `lg`: >= 1280px, 12 columns grid, 24px gutter

Available column classes:

* `col-$BREAKPOINT-$COLS`: A column spanning $COLS columns of the grid at $BREAKPOINT. If the viewport is smaller than $BREAKPOINT, columns have 100% width and are stacked vertically.
* `offset-$BREAKPOINT-$COLS`: Modify column to begin $COLS column from the left. Not applicable if viewport < $BREAKPOINT.
* `push-$BREAKPOINT-$COLS`: Push column $COLS to the right. Not applicable if viewport < $BREAKPOINT.
* `pull-$BREAKPOINT-$COLS`: Pull column $COLS to the left. Not applicable if viewport < $BREAKPOINT.

These classes can and should be mixed across breakpoints eg `.col-xs-2.col-md-3`.

## Footnotes

[1] To the extent reasonably possible.
