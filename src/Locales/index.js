import React from 'react';

export const MainBodyUA = (props) => {
  return (
    <div className="main-body">
      <p><b>РОСЛИНИ НЕ ТІЛЬКИ ЛІКУЮТЬ, А Й ДОБРЕ СМАКУЮТЬ.</b></p>
      <p><b>ЗА НИМИ МАЙБУТНЄ!</b></p><br/>
      <p>
        Недарма ж увесь світ наслідує принципи здорового харчування, щоб бути у гармонії 
        із собою та планетою.
      </p><br/>
      <p>
        Але ми пропонуємо не ще один салат, свіжі овочі 
        або фруктові соки. В «Ідеаль Немолоко» є те, що змінить твоє уявлення 
        про молоко. Бо це НЕмолоко.
      </p><br/>
      <p>
        Компанія «Люстдорф» першою підхопила світову тенденцію і створила давно 
        очікуваний 100% український, натуральний рослинний напій.
      </p>
      <p>
        Це смачно, доступно і з турботою про здоров'я країни. «Ідеаль Немолоко» 
        змінить твоє уявлення про здорове харчування, бо захочеться ще і ще!
      </p><br/>
      <p><b>Насолоджуйся!</b></p>
    </div>
  );
}

export const MainBodyRU = (props) => {
  return (
    <div className="main-body">
      <p><b>РАСТЕНИЯ НЕ ТОЛЬКО ЛЕЧАТ, НО И ПРЕКРАСНЫ НА ВКУС.</b></p>
      <p><b>ЗА НИМИ БУДУЩЕЕ!</b></p><br/>
      <p>
        Недаром же весь мир следует принципам здорового
        питания, чтобы быть в гармонии с собой и планетой.
      </p><br/>
      <p>
        Но мы предлагаем не ещё один салат, свежие овощи или фруктовые
        соки. В «Ідеаль Немолоко» есть то, что изменит твоё представление о
        молоке. Потому что это НЕмолоко.
      </p>
      <br/>
      <p>
        Компания «Люстдорф» первой подхватила мировую тенденцию и
        создала долгожданный 100% украинский, натуральный
        растительный напиток.
      </p>
      <p>
        Это вкусно, доступно и с заботой о здоровье страны.
        «Ідеаль Немолоко» изменит твоё представление о здоровом питании,
        потому что захочется ещё и ещё!
      </p><br/>
      <p><b>Наслаждайся!</b></p>
    </div>
  );
}

export const MainHeaderUA = (props) => (
  <div className="main-header">
    <h3>ПЕРШЕ УКРАЇНСЬКЕ «ІДЕАЛЬ НЕМОЛОКО»</h3>
  </div>
);

export const MainHeaderRU = (props) => (
  <div className="main-header">
    <h3>ПЕРВОЕ УКРАИНСКОЕ «ІДЕАЛЬ НЕМОЛОКО»</h3>
  </div>
);

export const WhySlideBodyUA = (props) => (
  <div className="why-body">
    <div className={props.index === 0 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      Ми хочемо бути на 100% впевненими<br/>
      у продуктах, які обираємо. А ти?
    </div>
    <div className={props.index === 0 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <p>
        Як відповідальний виробник, компанія «Люстдорф» переконана – все на нашому столі чи навіть в
        сумці для швидкого перекусу має бути абсолютно безпечним, якісним та корисним для здоров’я
        людей і всієї планети.
      </p><br/>
      <p>
        Ми турбуємося про наших споживачів:<br/>
        – про тих, хто любить змінювати смаки та експериментувати, про тих, хто не може пити коров’яче
        молоко і про тих, хто просто любить смачненьке. Тому й створили корисну альтернативу
        коров’ячого молока – рослинні напої, які ми ніжно називаємо «рослинне молоко».
      </p><br/>
      <p>
        Ми першими в Україні розробили нову лінійку 100% здорових, натуральних, рослинних напоїв
        «Ідеаль Немолоко», які принесуть у твоє життя нові смаки та користь.<br/>
        Чи є щось більш натуральне та природне для нас, як не рослини?
      </p>
    </div>
  </div>
);

export const WhySlideBodyRU = (props) => (
  <div className="why-body">
    <div className={props.index === 0 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      Мы хотим быть на 100% уверенными<br/>
      в продуктах, которые выбираем. А ты?
    </div>
    <div className={props.index === 0 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <p>
        Как ответственный производитель, компания «Люстдорф» уверена - все на нашем столе или даже в
        сумке для быстрого перекуса должно быть абсолютно безопасным, качественным и полезным для здоровья
        людей и всей планеты.
      </p><br/>
      <p>
        Мы заботимся о наших потребителях:<br/>
        – о тех, кто любит менять вкусы и экспериментировать, о тех, кто не может пить коровье
        молоко и о тех, кто просто любит вкусное. Поэтому и создали полезную альтернативу
        коровьего молока - растительные напитки, которые мы нежно называем «растительное молоко».
      </p><br/>
      <p>
        Мы первыми в Украине разработали новую линейку 100% здоровых, натуральных, растительных напитков
        «Ідеаль Немолоко», которые принесут в твою жизнь новые вкусы и пользу.<br/>
        Есть ли что-то более натуральное и природное для нас, если не растения?
      </p>
    </div>
  </div>
);

export const WhySlide1BodyUA = (props) => (
  <div className="why-body">
    <h4 className={props.index === 1 ? 'why-header why-header-active' : 'why-header'}>
      ДЛЯ КОГО ЩЕ «ІДЕАЛЬ НЕМОЛОКО»?
    </h4>
    <div className={props.index === 1 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      «Ідеаль Немолоко» корисне для всіх і кожного<br/>
      <div></div>для тих, хто любить пробувати нове<br/>
      <div></div>для тих, хто дотримується посту<br/>
      <div></div>для веганів, вегетаріанців, сироїдів<br/>
      <div></div>для тих, хто не переносить лактози або має алергію
      на білок коров&#39;ячого молока.
      <br/><br/>
      <p>
        Для пікніка і домашнього затишку, до чаю і просто так,
        у каші та всюди, де тільки хочеться.
      </p><br/>
      <p>
        Це здоровий та корисний продукт, 
        який можна і треба включати у свій щоденний раціон.
      </p>
    </div>
  </div>
);

export const WhySlide1BodyRU = (props) => (
  <div className="why-body">
    <h4 className={props.index === 1 ? 'why-header why-header-active' : 'why-header'}>
      ДЛЯ КОГО ЕЩЁ «ІДЕАЛЬ НЕМОЛОКО»?
    </h4>
    <div className={props.index === 1 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      «Ідеаль Немолоко» полезно для всех и каждого<br/>
      <div></div>для тех, кто любит пробовать новое<br/>
      <div></div>для тех, кто придерживается поста<br/>
      <div></div>для веганов, вегетарианцев, сыроедов<br/>
      <div></div>для тех, кто не переносит лактозу или имеет аллергию
      на белок коровьего молока.
      <br/><br/>
      <p>
        Для пикника и домашнего уюта, для чая и просто так,
        в каши и всюду, где только хочется.
      </p><br/>
      <p>
        Это здоровый и полезный продукт,
        который можно и нужно включать в свой ежедневный рацион.
      </p>
    </div>
  </div>
);

export const WhySlide2BodyUA = (props) => (
  <div className="why-body">
<<<<<<< Updated upstream
    <div className={props.index === 2 ? 'why-header why-header-active' : 'why-header'}>
      НАВІТЬ ПІД ЧАС ПОСТУ?
    </div>
    <div className={props.index === 2 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
=======
    <h4 className={props.index === 3 ? 'why-header why-header-active' : 'why-header'}>
      НАВІТЬ ПІД ЧАС ПОСТУ?
    </h4>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
>>>>>>> Stashed changes
      Звичайно!
      <br/><br/>
      <p>
        Під час посту треба утримуватись від продуктів
        тваринного походження (м&#39;яса, риби, молока та яєць).<br/>
        Але аж ніяк не нехтувати рослинами!
      </p><br/>
      <p>
        «Ідеаль Немолоко» – це 100% рослинний напій без лактози,
        казеїну, трансжирів, холестерину, ГМО та доданого цукру.
        Натомість, у ньому є вітаміни групи В в ідеальному співвідношенні,
        як найкращі «ліки» від стресу, а ще необхідний запас клітковини –
        джерело здоров’я, що регулює обмінні процеси та наповнює енергією.
      </p>
    </div>
  </div>
);

export const WhySlide2BodyRU = (props) => (
  <div className="why-body">
<<<<<<< Updated upstream
    <div className={props.index === 2 ? 'why-header why-header-active' : 'why-header'}>
      ДАЖЕ ВО ВРЕМЯ ПОСТА?
    </div>
    <div className={props.index === 2 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
=======
    <h4 className={props.index === 3 ? 'why-header why-header-active' : 'why-header'}>
      ДАЖЕ ВО ВРЕМЯ ПОСТА?
    </h4>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
>>>>>>> Stashed changes
      КОНЕЧНО!<br/><br/>
      <p>
        Во время поста нужно воздерживаться от продуктов
        животного происхождения (мяса, рыбы, молока и яиц).<br/>
        Но отнюдь не пренебрегать растениями!
      </p><br/>
      <p>
        «Ідеаль Немолоко» - это 100% растительный напиток без лактозы,
        казеина, трансжиров, холестерина, ГМО и добавленного сахара.
        Вместо этого, в нём есть витамины группы В в идеальном соотношении,
        как лучшее «лекарство» от стресса, а ещё необходимый запас клетчатки -
        источник здоровья, который регулирует обменные процессы и наполняет энергией.
      </p>
    </div>
  </div>
);

export const WhySlide3BodyUA = (props) => (
  <div className="why-body">
<<<<<<< Updated upstream
    <div className={props.index === 3 ? 'why-header why-header-active' : 'why-header'}>
      А ТОЧНО НЕмолоко?
    </div>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
=======
    <h4 className={props.index === 4 ? 'why-header why-header-active' : 'why-header'}>
      А ТОЧНО НЕмолоко?
    </h4>
    <div className={props.index === 4 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
>>>>>>> Stashed changes
      <p>
        Знак V-LABEL Vegan від Європейської вегетаріанської спілки<br/>
        (центральний офіс в Швейцарії) підтверджує,<br/>
        що це на 100% рослинний продукт.
      </p><br/>
      <p>
        А ти вже п’єш «ІДЕАЛЬ НЕМОЛОКО»?<br/>
        Шукай нас у Facebook, Instagram та Youtube<br/>
        і ділися враженнями та побажаннями!
      </p>
    </div>
  </div>
);

export const WhySlide3BodyRU = (props) => (
  <div className="why-body">
<<<<<<< Updated upstream
    <div className={props.index === 3 ? 'why-header why-header-active' : 'why-header'}>
      А ТОЧНО НЕмолоко?<br/>
    </div>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
=======
    <h4 className={props.index === 4 ? 'why-header why-header-active' : 'why-header'}>
      А ТОЧНО НЕмолоко?<br/>
    </h4>
    <div className={props.index === 4 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
>>>>>>> Stashed changes
      <p>
        Знак V-LABEL Vegan от Европейского вегетарианского союза<br/>
        (центральный офис в Швейцарии) подтверждает,<br/>
        что это 100% растительный продукт.
      </p><br/>
      <p>
        А ты уже пьёшь «ІДЕАЛЬ НЕМОЛОКО»?<br/>
        Ищи нас в Facebook, Instagram, Youtube<br/>
        и делись впечатлениями и пожеланиями!
      </p>
    </div>
  </div>
);