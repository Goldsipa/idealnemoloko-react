import React from 'react';

export const MainBodyUA = (props) => {
  return (
    <div className="main-body">
      <b>Рослини не тільки лікують, а й добре смакують.<br/>
      За ними майбутнє!</b><br/><br/>
      Недарма ж увесь світ наслідує принципи здорового харчування, щоб бути у гармонії 
      із собою та планетою. Але ми пропонуємо не ще один салат, свіжі овочі 
      або фруктові соки. В «Ідеаль Немолоко» є те, що змінить твоє уявлення 
      про молоко. Бо це НЕмолоко.
      <br/><br/>
      Компанія «Люстдорф» першою підхопила світову тенденцію і створила давно 
      очікуваний 100% український, натуральний рослинний напій.<br/>
      Це смачно, доступно і з турботою про здоров'я країни. «Ідеаль Немолоко» 
      змінить твоє уявлення про здорове харчування, бо захочеться ще і ще!<br/>
      <b>Насолоджуйся!</b>
    </div>
  );
}

export const MainBodyRU = (props) => {
  return (
    <div className="main-body">
      <b>Растения не только лечат, но и прекрасны на вкус.<br/>
      За ними будущее!</b><br/><br/>
      Недаром же весь мир следует принципам здорового
      питания, чтобы быть в гармонии с собой и планетой.<br/>
      Но мы предлагаем не ещё один салат, свежие овощи или фруктовые
      соки. В «Ідеаль Немолоко» есть то, что изменит твоё представление о
      молоке. Потому что это НЕмолоко.
      <br/><br/>
      Компания «Люстдорф» первой подхватила мировую тенденцию и
      создала долгожданный 100% украинский, натуральный
      растительный напиток.<br/>
      Это вкусно, доступно и с заботой о здоровье страны.
      «Ідеаль Немолоко» изменит твоё представление о здоровом питании,
      потому что захочется ещё и ещё!<br/>
      <b>Наслаждайся!</b>
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
      Як відповідальний виробник, компанія «Люстдорф» переконана – все на нашому столі чи навіть в
      сумці для швидкого перекусу має бути абсолютно безпечним, якісним та корисним для здоров’я
      людей і всієї планети.<br/>
      Ми турбуємося про наших споживачів:<br/>
      – про тих, хто любить змінювати смаки та експериментувати, про тих, хто не може пити коров’яче
      молоко і про тих, хто просто любить смачненьке. Тому й створили корисну альтернативу
      коров’ячого молока – рослинні напої, які ми ніжно називаємо «рослинне молоко».<br/>
      Ми першими в Україні розробили нову лінійку 100% здорових, натуральних, рослинних напоїв
      «Ідеаль Немолоко», які принесуть у твоє життя нові смаки та користь.<br/>
      Чи є щось більш натуральне та природне для нас, як не рослини?
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
      Как ответственный производитель, компания «Люстдорф» уверена - все на нашем столе или даже в
      сумке для быстрого перекуса должно быть абсолютно безопасным, качественным и полезным для здоровья
      людей и всей планеты.<br/>
      Мы заботимся о наших потребителях:<br/>
      – о тех, кто любит менять вкусы и экспериментировать, о тех, кто не может пить коровье
      молоко и о тех, кто просто любит вкусное. Поэтому и создали полезную альтернативу
      коровьего молока - растительные напитки, которые мы нежно называем «растительное молоко».<br/>
      Мы первыми в Украине разработали новую линейку 100% здоровых, натуральных, растительных напитков
      «Ідеаль Немолоко», которые принесут в твою жизнь новые вкусы и пользу.<br/>
      Есть ли что-то более натуральное и природное для нас, если не растения?
    </div>
  </div>
);

export const WhySlide1BodyUA = (props) => (
  <div className="why-body">
    <h4 className={props.index === 1 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      ДЛЯ КОГО ЩЕ «ІДЕАЛЬ НЕМОЛОКО»?
    </h4>
    <div className={props.index === 1 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      «Ідеаль Немолоко» корисне для всіх і кожного<br/>
      <div></div>для тих, хто любить пробувати нове<br/>
      <div></div>для тих, хто дотримується посту<br/>
      <div></div>для веганів, вегетаріанців, сироїдів<br/>
      <div></div>для тих, хто не переносить лактози або має алергію<br/>
      на білок коров&#39;ячого молока.<br/><br/>
      Для пікніка і домашнього затишку, до чаю і просто так,<br/>
      у каші та всюди, де тільки хочеться.<br/><br/>
      Це здоровий та корисний продукт,<br/>
      який можна і треба включати у свій щоденний раціон.
    </div>
  </div>
);

export const WhySlide1BodyRU = (props) => (
  <div className="why-body">
    <h4 className={props.index === 1 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      ДЛЯ КОГО ЕЩЁ «ІДЕАЛЬ НЕМОЛОКО»?
    </h4>
    <div className={props.index === 1 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      «Ідеаль Немолоко» полезно для всех и каждого<br/>
      <div></div>для тех, кто любит пробовать новое<br/>
      <div></div>для тех, кто придерживается поста<br/>
      <div></div>для веганов, вегетарианцев, сыроедов<br/>
      <div></div>для тех, кто не переносит лактозу или имеет аллергию<br/>
      на белок коровьего молока.<br/><br/>
      Для пикника и домашнего уюта, для чая и просто так,<br/>
      в каши и всюду, где только хочется.<br/><br/>
      Это здоровый и полезный продукт,<br/>
      который можно и нужно включать в свой ежедневный рацион.
    </div>
  </div>
);

export const WhySlide2BodyUA = (props) => (
  <div className="why-body">
    <div className={props.index === 2 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      НАВІТЬ ПІД ЧАС ПОСТУ?
    </div>
    <div className={props.index === 2 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
      Звичайно!<br/>
      Під час посту треба утримуватись від продуктів<br/>
      тваринного походження (м&#39;яса, риби, молока та яєць).<br/><br/>
      Але аж ніяк не нехтувати рослинами!<br/>
      «Ідеаль Немолоко» – це 100% рослинний напій без лактози,<br/>
      казеїну, трансжирів, холестерину, ГМО та доданого цукру.<br/><br/>
      Натомість, у ньому є вітаміни групи В в ідеальному співвідношенні,<br/>
      як найкращі «ліки» від стресу, а ще необхідний запас клітковини –<br/>
      джерело здоров’я, що регулює обмінні процеси та наповнює енергією.
    </div>
  </div>
);

export const WhySlide2BodyRU = (props) => (
  <div className="why-body">
    <div className={props.index === 2 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      ДАЖЕ ВО ВРЕМЯ ПОСТА?
    </div>
    <div className={props.index === 2 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
      КОНЕЧНО!<br/>
      Во время поста нужно воздерживаться от продуктов<br/>
      животного происхождения (мяса, рыбы, молока и яиц).<br/><br/>
      Но отнюдь не пренебрегать растениями!<br/>
      «Ідеаль Немолоко» - это 100% растительный напиток без лактозы,<br/>
      казеина, трансжиров, холестерина, ГМО и добавленного сахара.<br/><br/>
      Вместо этого, в нём есть витамины группы В в идеальном соотношении,<br/>
      как лучшее «лекарство» от стресса, а ещё необходимый запас клетчатки -<br/>
      источник здоровья, который регулирует обменные процессы и наполняет энергией.
    </div>
  </div>
);

export const WhySlide3BodyUA = (props) => (
  <div className="why-body">
    <div className={props.index === 3 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      А ТОЧНО НЕмолоко?
    </div>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
      Знак V-LABEL Vegan від<br/>
      Європейської вегетаріанської спілки<br/>
      (центральний офіс в Швейцарії) підтверджує,<br/>
      що це на 100% рослинний продукт.<br/><br/>

      А ти вже п’єш «ІДЕАЛЬ НЕМОЛОКО»?<br/>
      Шукай нас у Facebook або Instagram<br/>
      і ділися враженнями та побажаннями!<br/>
    </div>
  </div>
);

export const WhySlide3BodyRU = (props) => (
  <div className="why-body">
    <div className={props.index === 3 ? 'why-body-title why-body-title-active' : 'why-body-title'}>
      А ТОЧНО НЕмолоко?<br/>
    </div>
    <div className={props.index === 3 ? 'why-body-description why-body-description-active' : 'why-body-description'}>
      <br/>
      Знак V-LABEL Vegan от<br/>
      Европейского вегетарианского союза<br/>
      (центральный офис в Швейцарии) подтверждает,<br/>
      что это 100% растительный продукт.<br/><br/>

      А ты уже пьёшь «ІДЕАЛЬ НЕМОЛОКО»?<br/>
      Ищи нас в Facebook и Instagram<br/>
      и делись впечатлениями и пожеланиями!
    </div>
  </div>
);