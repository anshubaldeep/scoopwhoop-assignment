import React, { useEffect, useRef, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import instance from "../axios";
import TabNav from "../layout/TabNav";
import NewsCard from "./NewsCard";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(-1);
  const loader = useRef(null);

  useEffect(() => {
    if(page>3){
      return;
    }
    instance
      .get(`?offset=${page}&limit=8`)
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1000)))
      .then(function (response) {
        setData([...data, ...response.data.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting)  {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "2px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  console.log(data);
  const navItems = ["fresh", "hot"];
  return (
    <div className="main">
      <TabNav items={navItems} default="/fresh" />
      <Row>
        {data.map((el, index) => (
          <NewsCard
            key={index}
            image={el.feature_img}
            category={el.cat_display[0].category_display}
            headline={el.title}
            time={el.readtime}
            date={el.pub_date}
            author={el.auth_display.display_name}
            author_url={el.auth_display.author_url}
            slug={el.slug}
          />
        ))}
      </Row>
      {page < 4 ? (
        <div className="spinner-div" ref={loader}>
          <Spinner
            animation="border"
            role="status"
            size="xl"
            as="div"
          ></Spinner>
          <br />
          <span className="sr-only center">Loading...</span>
        </div>
      ) : (
        <div class="read-more">
          <a href="#home" alt="Read-More" className="read-more-link">
            Read More <ArrowRight />{" "}
          </a>
        </div>
      )}
    </div>
  );
};

export default Main;
