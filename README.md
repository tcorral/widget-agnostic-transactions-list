# widget-agnostic-transactions-list
This repository will show how to create a transactions list widget without any dependency but CXP 5.6 platform.

## Index
* Start with an empty repository.
* Explain how to import the widget in CXP. 
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
* **Fill the list from Javascript using fake data.**
* Fill the list from Javascript using XHR to fetch the data from a file with fake data.
* Improve the markup to be easily styled from the theme.
	* **Styles in widget should only be used for scaffolding**
* Create a new theme for our portal.
* Style our list to look as the Transactions List Screenshot.

  ![Transactions List](./readme-media/transactions-list-screenshot.png "Transactions List Screenshot")

### Section
#### Fill the list from Javascript using fake data.
The idea of this step is to recreate the same list we hardcoded in the previous step but using Javascript and fake data to render it 
on the page.

**Steps:**
* Create a folder to store the scripts.
	* I named it "scripts"
* Create an empty Javascript file and save it in the scripts folder.
	* I named it "main.js"
* Add a SCRIPT tag in your *index.html* file where you will add the src attribute with the relative path to you main Javascript file.
* Delete the content of the UL node.
* Add a class to the UL node so that you can access it later.
	* **You should never an id to your widget, adding it could lead to lack of reusability and maybe to some weird behaviour that is worst**
	* I named my class "items-list"
* Now our script should:
	* Get a reference to the UL node henceforth named 'LIST'.
	* Get a list of transactions with: 
		* Month name, only 3 chars.
		* Day of the month, 2 chars.
		* Description of the transaction
		* Amount that could be possible or negative but with the currency sign on it.
	* Loop over the list of transactions and add a LI node per each in the LIST.
	* Try to keep it as simple as possible and don't use anything else that plain Javascript.
* Import your widget again.
* Reload your page.

It will look like the next screenshot:

  ![Transactions List Javascript and fake data](./readme-media/hardcoded-list-in-html.png "Transactions List Javascript and fake data")
  
You also can add more than one widget in the same page.
  
  ![More than one widget in the same page](./readme-media/more-than-one-widget-in-page.png "More than one widget in the same page")