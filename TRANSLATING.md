We have now fully configured both the homepage and the exchange with support for internationalization. **Anyone can add support for a language.** Instructions are below:

1. [Create a Github Account](#create-a-github-account)
2. [Get a Copy of the Translations Repo](#get-a-copy-of-the-translations-repo)
3. [Translating the Exchange](#translating-the-exchange)
4. [Translating the Frontend](#translating-the-frontend)
5. [Contribute Back for Deployment](#contribute-back-for-deployment)

## Create a Github Account

In order to contribute translations, you'll need to have a [Github account](https://github.com/join). If you don't have a github account, sign up for one through that link.

## Get a Copy of the Translations Repo

We need to get our own copy of the repository to start translating:

1. The first step is to visit the [translations page on Github](https://github.com/mantso/p3d-translations). 

[![](https://i.imgur.com/dZzjqJM.png)](https://github.com/mantso/p3d-translations)

2. Click the "Fork" button on the repository to create your own copy.

3. You now have your own personal copy of the repo which can be used for translations.

You are now ready to start translating.

## Translating the Exchange

Let's start by translating the exchange:

1. First, visit [this common.json file from the main repo](https://raw.githubusercontent.com/mantso/p3d-translations/master/exchange/en/common.json). 

2. Copy all of the text in this file to your clipboard to paste into a new file.

3. Go to your copy that you created and click "Create new file"

![](https://i.imgur.com/8ewby2K.png)

4. Find your [country code](#country-codes) below (for example, `es` for Spanish or `ko` for Korean)

5. Enter the folliowing as the file name: `exchange/[country-code]/common.js`. For example, `exchange/es/common.js`.

![](https://i.imgur.com/FxiVesF.png)

6. Paste the full text of [this common.json file from the main repo](https://raw.githubusercontent.com/mantso/p3d-translations/master/exchange/en/common.json) into this new file.

7. Click "Commit new file" at the bottom of this page

![](https://i.imgur.com/KPH0Ez0.png)

8. Click into the file "common.js" that you just created. 

9. Click the pencil icon to edit this file

![](https://i.imgur.com/A11E6Ah.png)

10. Fill out translations for your language, replacing all English phrases with the appropriate equivalent. For example, here's the English strings:

```js
{
	"masthead": {
		"holdings": "Holdings",
		"balance": "{{balance}} ETH in contract"
	},
    // ...
}
```

and then replace that with:

![](https://i.imgur.com/gSSHxUI.png)

11. Once finished with translations or wanting to save changes, then scroll down and click "Commit changes":

![](https://i.imgur.com/o4HsBvJ.png)

12. Once you've translated all strings, then the exchange translations are complete!

## Translating the Frontend

Next, we need to translate the front-end following the same pattern:

1. First, visit [this frontend common.json file from the main repo](https://raw.githubusercontent.com/mantso/p3d-translations/master/frontend/en/common.json). 

2. Copy all of the text in this file to your clipboard to paste into a new file.

3. Go to your copy that you created and click "Create new file"

![](https://i.imgur.com/8ewby2K.png)

4. Find your [country code](#country-codes) below (for example, `es` for Spanish or `ko` for Korean)

5. Enter the folliowing as the file name: `frontend/[country-code]/common.js`. For example, `frontend/es/common.js`.

6. Paste the full text of [this common.json file from the main repo](https://raw.githubusercontent.com/mantso/p3d-translations/master/frontend/en/common.json) into this new file.

7. Click "Commit new file" at the bottom of this page

8. Click into the file "common.js" that you just created. 

9. Click the pencil icon to edit this file

10. Fill out translations for your language, replacing all English phrases with the appropriate equivalent. 

11. Once finished with translations or wanting to save changes, then scroll down and click "Commit changes":

12. Once you've translated all strings, then the frontend translations are complete!

You can check out my [example repo here](https://github.com/cryptoknighte/p3d-translations)!

## Contribute Back for Deployment

Now we are ready to submit this back for review so the translation can be deployed!

1. Click on "Pull Request" tab on your copy of the code

![](https://i.imgur.com/WugRSF6.png)

2. Click "New Pull Request"

![](https://i.imgur.com/QV9FZhL.png)

3. Enter a title and description mentioning your language translations are complete

![](https://i.imgur.com/180bKtI.png)

4. Click "Create pull request" to send us a notification that you are ready for review.

5. Once we review and merge, these translations will be soon be pulled into the official site!

Happy translating!

## Bugging Mantso 

The final step is, if you do not yet see your translations merged to the site, be sure to **bug @Mantso** and ask him to deploy the latest translations.

## Country Codes

```
ar: Arabic
az: Azerbaijani
be: Belorussian
bg: Bulgarian
bs: Bosnian
ca: Catalan
cs: Czech
da: Danish
de: German
en: English
es: Spanish
et: Estonian
fa: Persian
fi: Finnish
fr: French
el: Greek
he: Hebrew
hr: Croatian
hu: Hungarian
hy: Armenian
it: Italian
id: Indonesian
ja: Japanese
ka: Georgian
kk: Kazakh
ko: Korean
ky: Kyrgyz
lt: Lithuanian
lv: Latvian
mk: Macedonian
mn: Mongolian
nb: Norwegian Bokmål
nl: Dutch
nn: Norwegian Nynorsk
pl: Polish
pt: Portuguese
ro: Romanian
ru: Russian
sk: Slovak
sl: Slovene
sr: Serbian
sv: Swedish
tr: Turkish
uk: Ukrainian
uz: Uzbek
zh: Chinese
```
