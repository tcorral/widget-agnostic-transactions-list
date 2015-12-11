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
* Fill the list from Javascript using fake data.
* Fill the list from Javascript using XHR to fetch the data from a file with fake data.
* Improve the markup to be easily styled from the theme.
	* **Styles in widget should only be used for scaffolding**
* **Create a new theme for our portal.**
* Style our list to look as the Transactions List Screenshot.

  ![Transactions List](./readme-media/transactions-list-screenshot.png "Transactions List Screenshot")

### Section
#### Create a new theme for our portal.
Clone the theme-default from bitbucket:

```
git clone https://bitbucket.org/backbase/lpm-theme-default
```
Follow the instructions in the README.md file

Build the theme using:

```
bb theme-build
```

Import the theme using:

```
bb import-item
```

Do you have an example of the compiled training theme in the training-content folder.
I have called it 'training-theme'.
