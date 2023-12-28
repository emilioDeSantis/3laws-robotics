import axios from "axios";
import cheerio from "cheerio";

// Function to parse subtitles
function parseSubTitle(element: CheerioElement, $: CheerioStatic) {
    const subTitleText = $(element).text().trim();
    return {
        slice_type: "blog_post_subtitle",
        primary: {
            subtitle: subTitleText,
        },
    };
}
function parseBlogPostParagraphOrNoteOrInlineSubtitle(
  element: CheerioElement,
  $: CheerioStatic
) {
  const paragraphText = $(element).text().trim();
  const isNote = $(element).find("em").length > 0;

  // Define a more precise check for inline subtitles
  const isInlineSubtitle = $(element).is("p") && $(element).find('span').length > 0 &&
                           $(element).html().includes('font-size:20px') && 
                           $(element).html().includes('font-weight:700');

  let sliceType = "blog_post_paragraph";
  if (isNote) {
      sliceType = "blog_post_note";
  } else if (isInlineSubtitle) {
      sliceType = "blog_post_subtitle";
  }

  return {
      slice_type: sliceType,
      primary: {
          text: paragraphText,
      },
  };
}



function parseBlogPostBulletList(element: CheerioElement, $: CheerioStatic) {
    const listItems = $(element)
        .find("li")
        .map((i, item) => {
            return $(item).text().trim();
        })
        .get();

    return {
        slice_type: "blog_post_bullet_list",
        primary: {
            items: listItems,
        },
    };
}

function parseBlogPostNumberedList(element: CheerioElement, $: CheerioStatic) {
    const listItems = $(element)
        .find("li")
        .map((i, item) => {
            return $(item).text().trim();
        })
        .get();

    return {
        slice_type: "blog_post_numbered_list",
        primary: {
            items: listItems,
        },
    };
}

// Other imports and functions...

// Modified scrape function
export async function scrapeWixBlog(url: string) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const blogPosts = [];

        $("article").each((i, element) => {
            const slices = [];

            // Find and parse subtitles, paragraphs, and notes
            $(element)
                .find("h2, p, ul, ol")
                .each((j, textElement) => {
                    if ($(textElement).is("h2")) {
                        const subTitleSlice = parseSubTitle(textElement, $);
                        slices.push(subTitleSlice);
                    }
                    else if ($(textElement).is("p")) {
                        const textSlice = parseBlogPostParagraphOrNoteOrInlineSubtitle(
                            textElement,
                            $
                        );
                        slices.push(textSlice);
                    } else if ($(textElement).is("ul")) {
                        const bulletListSlice = parseBlogPostBulletList(
                            textElement,
                            $
                        );
                        slices.push(bulletListSlice);
                    } else if ($(textElement).is("ol")) {
                        const numberedListSlice = parseBlogPostNumberedList(
                            textElement,
                            $
                        );
                        slices.push(numberedListSlice);
                    }
                });

            // Add more .find().each() for other slice types...

            blogPosts.push({ slices });
        });

        return blogPosts;
    } catch (error) {
        console.error("Error scraping Wix blog:", error);
        return [];
    }
}

// Example usage in your API route...

// Example usage in your API route...

// Example usage in your API route...

export async function GET(request: Request) {
    const url =
        "https://www.3lawsrobotics.io/post/3laws-is-not-a-general-data-visualization-platform"; // Replace with the actual Wix blog URL
    const blogPosts = await scrapeWixBlog(url);
    console.log(blogPosts[0].slices);
    return new Response(blogPosts);
}
