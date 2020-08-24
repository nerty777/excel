# Excel appication on Pure Javascript based on Vladilen Minin's course

## Реализовано:

1. **Роутинг** 2 страниц: панель управления для создания таблиц и непосредственно страница самой таблицы.<br>

2. **В панели управления можно** увидеть все созданные таблицы и время их последнего открывания.<br>

3. **На странице таблицы можно**:<br>

	+ **сменить название** самой таблицы<br>

	+ в header есть **кнопка удаления текущей таблицы** и **кнопка возврата в панель управления**<br>
	+ чтоб **выделить группу ячеек** необходимо выбрать любую ячейку и с зажатой shift нажать мышкой на другую ячейку.
	+ есть toolbar, где можно для ячейки или групы ячеек применить **выравнивания текста** по левому краю, по центру, по правому краю. Можно текст сделать **жирным, наклонным или подчеркнутым**.<br>
	+ для ячейки реализована **поддержка формул**. В секции *fx* необходимо набрать знак = и потом матиматическое выражение. Например, *=1+2* , а в ячейке отобразится результат 3.<br>
	+ **реализована поддержка изменения размеров строк и колонок**. Необходимо навести на конец колонки(обозначены А B C D E ...) и появится ползунок для изменения размера. Аналогично и для строк. Необходимо навести вниз на номер строки и появится ползунок изменения высоты строки<br>
	+ **при перезагрузке страницы все данные сохраняются** в localStorage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>