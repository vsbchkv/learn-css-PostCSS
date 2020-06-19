<h1>learn-css-PostCSS</h1>
<p>Учебный проект по PostCSS</p>
<p>Эксперимент по использованию PostCSS в задачах где обычно требуются препроцессоры</p>
<p>Использованы: Html, CSS, Gulp, PostCSS, CSS-переменные.</p>
<h2>Установка:</h2>
<ol>
    <li>Клонируем репозиторий</li>
    <li>Запускаем npm install</li>
    <li>Сборка запускается командой gulp</li>
</ol>
<h2>Структура:</h2>
<ol>
    <li>views/ - исходная разметка</li>
    <li>style/ - исходный CSS</li>
    <li>media/ - исходные изображения</li>
    <li>build/ - Билд для сборки</li>
</ol>
<h2>Использованы PostCSS плагины:</h2>
<ol>
    <li>doiuse - для проверки браузерной поддержки</li>
    <li>stylelint - проверка на ошибки и единообразие css
        <ul>
            <li>Команда npm run styles:lint запускает линтер</li>
            <li>npm run styles:fix применяет исправления</li>
        </ul>
    </li>
    <li>stylelint-order - упорядочивание свойств</li>
    <li>cssnext - использование синтаксиса еще не вошедшего в спецификацию</li>
    <li>PostCSS-import для разделения css на компоненты</li>
    <li>cssnano для минификации готового билда</li>
    <li>autoprefixer отдельно не использовался т.к. префиксы добавляются cssnext</li>
</ol>

<h2>Особенности:</h2>
<ol>
    <li>Файлы стили разделены на компоненты, которые подключаются в общий styles.css</li>
    <li>Директива @apply позволяет наследовать стили другого селектора, аналогично @extend в SASS</li>
    <li>Редакторы по умолчанию подсвечивают синтаксис cssnext как ошибки. Можно исправить плагинами <a href="https://marketplace.visualstudio.com/items?itemName=ricard.PostCSS">для vs code</a> или <a href="https://plugins.jetbrains.com/plugin/8578-postcss">для webstorm</a></li>
</ol>
