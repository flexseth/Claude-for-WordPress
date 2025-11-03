## Static rendering of blocks
A static block is a piece of content whose markup is known when the page is saved. The block saves its content and markup directly in the post content. The Paragraph block is a simple example of a static block.

When a block has static rendering, it should rely mostly on user input in the post editor to save files in the database.

Static blocks are not as versatile as dynamic blocks, but have plenty of use cases if the content is expected to be entered into the editor and not change based on external factors.

Static blocks are expected to be the same between page loads, unless the user edits the content in the editor.

https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/#static-rendering

# build a static block
To build a static block using `@wordpress/create-block`, use the following command:
npx @wordpress/create-block@latest <block-name> --render-type static