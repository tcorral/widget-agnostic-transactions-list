# widget-agnostic-transactions-list
This repository will show how to create a transactions list widget without any dependency but CXP 5.6 platform.

## Index
* Start with an empty repository.
* **Explain how to import the widget in CXP.** 
* Create the minimum structure to import your widget to the editor.
* Modify the markup to show a 'Hello World' message.
* Modify the markup to show a list of items.
	* Each item will contain:
		* Date:
			* Month name, only three characters. i.e. 'Dec' -> 'December'
			* Day of the month, two characters. i.e '09', '10'
		* Description:
			* The description of the transaction.
		* Amount:
			* Two decimals. i.e. 40 -> 40.00
			* Currency sign. i.e. 40 -> $40.00
			* Payment transactions. i.e. 40 -> -$40.00
* Fill the list from Javascript using fake data.
* Fill the list from Javascript using XHR to fetch the data from a file with fake data.
* Improve the markup to be easily styled from the theme.
	* **Styles in widget should only be used for scaffolding**
* Create a new theme for our portal.
* Style our list to look as the Transactions List Screenshot.

    ![Transactions List](./readme-media/transactions-list-screenshot.png "Transactions List Screenshot")

### Section
####Explain how to import the widget in CXP.
**IMPORTANT: To import a widget in CXP you should have a CXP instance running.**

CXP provides the user/developer a REST API to import each component type.
[REST API Documentation](https://my.backbase.com/training/essentials-training/portal-apis/rest-api)

To improve the speed of development BB provides the customer with tools that abstract the import without requiring to use a REST API client.

##### Importing tools:


*YAPI:* 

Webapp that can be added to the portal during the build process that provides the funcionality of import components.

**[YAPI](https://my.backbase.com/training/essentials-training/portal-tools/yet-another-portal-importer)**


*bb-cli:* 

Command line tool created using [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

**[bb-cli](https://github.com/Backbase/bb-cli)**


##### Which tool we are gonna use in this training?

We are gonna use the bb-cli tool so you have to install it in your computer.
 
  *It requires administrator permissions to install global packages*

```
npm install -g bb-cli
```

Once you have installed the tool you have to change the directory to the root of your widget then you will be able to 
import it using one of the following commands:

*Import on demand:*

```
bb import-item
```

*Watch the code changes and import the widget on each change:*

```
bb import-item --watch
```

So that we know how to import our widget to CXP now it's time to create the minimum structure so that we can import it succesfully.

