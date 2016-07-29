# Readmorize

A JQuery plugin based on [an article on CSS Tricks](https://css-tricks.com/text-fade-read-more/). See the [live demo](http://plnkr.co/3uxlwY) on Plunker!

# Usage

```javascript
$('#your-element').readmorize({
  step: 150,
  overflowAfter: 150
});
```

Options:

* overflowAfter: your block will be cut down to this height (in pixels). The overflown will be hidden and expand only after clicking the 'read more' button.
* step: The number of pixels to expand the block down after 'read more' link is clicked. `undefined` means that clicking the link will expand the whole block.
