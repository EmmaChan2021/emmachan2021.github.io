import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // 这部分填写你自己的
        repo="EmmaChan2021/emmachan2021.github.io"
        repoId="R_kgDOIHQZmg"
        category="Announcements"
        categoryId="DIC_kwDOIHQZms4CR5Q8"
        mapping="og:title"
        strict="1"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;