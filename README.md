# Wrtnlabs landing

### Getting Started

```bash
git clone https://github.com/wrtnlabs/landing.git
cd landing
pnpm install
pnpm run dev
```

If it ran successfully, you can now check the project at <http://localhost:3000>.

---

### How to write a blog

The blog page of Wrtnlabs was created with [nextra](https://nextra.site/).

When writing a new blog post, you must follow these rules:

1. Write your post as an .mdx file in the `/content` folder. The mdx file name specified at this time becomes the detailed URL.
2. A blog post must include the following information:
   | | title | date | tags(category) | author | thumbnail(optional)
   |:---|:---:|:---:|:---:|:---:|:---:|
   | type | `string` | `string` | `Team News \| Agentica  \| Autoview \| Agent OS` | `string` | `string`
   | example | "Meet Our New member" | "2025-03-28" | - Team News | Amber | "/content/meet-our-new-member/thumbnail.png"
3. If files such as photos and videos are inserted into a blog post, create a folder with the same file name as the one created in step 1 in the `/public/content/` folder and upload the assets to that folder.
4. If you are inserting a video, you must use a custom player `<Player />` rather than `<video />`. For usage examples, see `/content/meet-our-new-member.mdx`.
