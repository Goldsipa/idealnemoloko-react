import React from 'react';

import vegan from '../img/vegan.png';
import vegetarian from '../img/vegetarian.png';
import lactoseFree from '../img/lactose-free.png';

const IMG_URL = 'https://res.cloudinary.com/syplemstudio/';

const RecipesSlide = (props) => (
  <div className="swiper-slide">
    <div className="recipes-left">
      <div className="recipes-header">
        <h3>{ props.lang === 'ua' ? props.recipe.title : props.recipe.title_rus }</h3>
      </div>
      <div className="recipes-body">
        <div className="recipes-body-subtitle">
          { props.lang === 'ua' ? props.recipe.subtitle : props.recipe.subtitle_rus }
        </div>
        <p className="recipes-body-text">
          { props.lang === 'ua' ? props.recipe.bold_text : props.recipe.bold_text_rus }
        </p>
        <p className="recipes-body-ingridients">
          { props.lang === 'ua' ? "Інгредієнти" : "Ингредиенты" }
        </p>
        <table>
          <tbody>
            { props.lang === 'ua' ? props.recipe.ingridients.map(
              (ingridient, i) => (
                <tr key={ "ingridient" + i }>
                  <td>-</td>
                  <td>{ingridient}</td>
                </tr>
              )
            ) : props.recipe.ingridients_rus.map(
              (ingridient, i) => (
                <tr key={ "ingridient" + i }>
                  <td>-</td>
                  <td>{ingridient}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <p className="recipes-body-howto">
          { props.lang === 'ua' ? "Спосіб приготування" : "Способ приготовления" }
        </p>
        <table>
          <tbody>
            { props.lang === 'ua' ? props.recipe.howto.map(
              (ingridient, i) => (
                <tr key={ "how" + i }>
                  <td>{i + 1}.</td>
                  <td>{ingridient}</td>
                </tr>
              )
            ) : props.recipe.howto_rus.map(
              (ingridient, i) => (
                <tr key={ "how" + i }>
                  <td>{i + 1}.</td>
                  <td>{ingridient}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="recipes-body-endline">
        { props.lang === 'ua' ? props.recipe.endline.map(
            (end, i) => <span key={ "end" + i }>{end}</span>
          ) : props.recipe.endline_rus.map(
            (end, i) => <span key={ "end" + i }>{end}</span>
          )}
        </div>
        <div className="recipes-badges">
          { props.recipe.is_vegan && <img src={vegan} alt="vegan" />}
          { props.recipe.is_vegetarian && <img src={vegetarian} alt="vegetarian" />}
          { props.recipe.is_not_hypolactasian && <img src={lactoseFree} alt="lactose free" />}
        </div>
      </div>
    </div>
    <div className="recipes-right">
      <div className="recipes-right-img" style={{ backgroundImage: `url(${IMG_URL + props.recipe.image })` }}></div>
    </div>
  </div>
);

export default RecipesSlide;