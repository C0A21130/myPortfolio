import { useState } from 'react'
import Works from "./Works.ts"

const IMG_URL = import.meta.env.VITE_IMG_URL;
const URL = import.meta.env.VITE_URL;

function App() {
  const [tag, setTag] = useState<Tag>("all");
  const [pages, setPages] = useState<Page[]>(Works);

  const changeTag = (t: Tag) => {
    setTag(t);

    if (t === "all") {
      setPages(Works);
      return;
    }
        
    setPages([...Works].filter((page) => {
      return page.tag === t
    }))
  }

  return (
    <>
      <div className="tag" id={tag}>
        <div className="buttons">
          <button onClick={() => changeTag("all")} id={tag === "all" ? "cheacked" : undefined}>すべて</button>
          <button onClick={() => changeTag("service")} id={tag === "service" ? "cheacked" : undefined}>サービス開発</button>
          <button onClick={() => changeTag("robot")} id={tag === "robot" ? "cheacked" : undefined}>ロボット開発</button>
          <button onClick={() => changeTag("other")} id={tag === "other" ? "cheacked" : undefined}>その他</button>
        </div>
      </div>
      <div className="pages">
      {pages.map((page, index) => {
        return (
          <div className="page" id={page.tag} key={index}>
            <h3>{page.title}</h3>
            <div className="page-img">
              <img src={`${IMG_URL}${page.img}`} alt={page.text}></img>
            </div>
            <div className="page-text">
              <p>{page.text}</p>
              <p className="link"><a href={`${URL}${page.url}`}>＞</a></p>
            </div>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App
