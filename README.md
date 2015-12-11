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
* **Improve the markup to be easily styled from the theme.**
	* **Styles in widget should only be used for scaffolding**
* Create a new theme for our portal.
* Style our list to look as the Transactions List Screenshot.

  ![Transactions List](./readme-media/transactions-list-screenshot.png "Transactions List Screenshot")

### Section
#### Improve the markup to be easily styled from the theme.
If we take a look at the previous screenshot we will see that our output is a "BIT" different. 
This step is try to reproduce the markup to look more similar to the example but only concerning about the markup, the style will be done in the next step.

*Facts:*

* Each transaction has the same height.
* Date is split in two lines.
	* Month
	* Day of the month
* Description is split in two lines.
	* Beneficiary.
	* Transaction's Category
* Date, Amount and Beneficiary have the same font size.
* Transaction's Category font size is quite smaller than the others.
* Description is at least two times wider than Date or Amount.
* Date and Amount seems to have the same width;
* Each transaction has an icon assigned.
	* Each icon is related with the beneficiary of the transaction.
* Each transaction has a left border of a different color.
	* Transaction's Category defines the color of the border.
* Each transaction has border.
	* Between transactions the border is only one pixel height. 
		* Only top or bottom border is added to all the transactions.
	* First transaction has a top left and right round border.
	* Last transaction has a bottom left and right round border.
* Each transaction has a caret sign at the end.

To accomplish some of these facts is required to modify the fake data to add some new information and also the items template.
