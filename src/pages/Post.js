import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
function Post() {
  return (
    <div className="postp">
      <div className="content-p">
        <img
          src="https://images.adsttc.com/media/images/6037/0fbb/f91c/8122/3000/03e5/slideshow/12_2ND_FLOOR_FOYER.jpg?1614221227"
          alt="pic"
        />
        <div className="user">
          <img
            src="https://cdn.statusqueen.com/dpimages/thumbnail/cute_girl_dp_image-3430.jpg"
            alt="pic1"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 Days ago</p>
          </div>
          <div className="edit">
            <Link>
              <img src={Edit} alt="edit-img" />
            </Link>
            <img src={Delete} alt="delete-img" />
          </div>
        </div>
        <h1>
          Architecture and Topography: 25 Projects with Different Approaches to
          Relief
        </h1>
        <h5>
          Parallelly, thanks to the cooperation with the Computational Robotics
          Lab, we developed a custom tool that has allowed us to optimize the
          single pods shape by interactively controlling their complex geometry
          while considering relevant material and fabrication parameters. For
          example, it maintains the individual panels flat and respects the
          possible range of their individual sizes while improving structural
          load capacity. Eventually, the cross-laminated timber plates are
          robotically assembled with a novel assembly procedure that has been
          created by Gramazio Kohler Research, ETH Zurich, together with TS3,
          and the Chair for Timber Structures at ETH Zurich. This process allows
          butt joint bonding of wood, thus making the production of large areas
          of complex folded wood structures possible.<br></br>
          <br></br>
          Questions on nature. The vertical, landscaping concept within the pods
          has been ideated together with and implemented by Müller Illien
          Landscape Architects Gmbh. Nature will have the chance to grow
          undisturbed: people cannot access the pagoda-like pods. Our only
          chance to admire the new living and morphing ecosystem is as hosts and
          passers-by. For the moment, just from underneath, and in the future,
          also from the surrounding buildings that will rise around it.
          Semiramis is a precursor in the new urban area of the Tech Cluster
          Zug, as the adjacent buildings will be erected during subsequent years
          and decades.<br></br>
          <br></br>
          Apart from being an installation that wishes to question and reflect
          on our complex relationship with nature, Semiramis will provide a
          retreat and gathering place underneath its surfaces for the workers
          and inhabitants of this area of Zug. Thanks to its green
          densification, which is regulated through a centralized irrigation
          system, the light will be filtered and will create various degrees of
          shade on the ground while offering a comfortable microclimate in the
          hottest months of the year.
        </h5>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Post;
