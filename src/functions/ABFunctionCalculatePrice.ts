import { ABProduct, ABProductData, ABProductOptionMultipleSelectedValues, ABProductOptionSelections, ABProductOptionSingleSelectedValue, ABProductOptionsType } from "../types/ABProduct";

export const ABFunctionCalculatePrice = (product: ABProduct | ABProductData, selectedOptions: ABProductOptionSelections[]) => {
    
    let unitPrice = product.price;

    // Go trough every selected option
    selectedOptions.forEach((selectedOption, index) => {

        const optionId = selectedOption.option_id;
        const productOption = product.options.find((obj) => obj.id === optionId);
    
        if (productOption) {
            if (productOption.type === ABProductOptionsType.SINGLE_SELECTION) {
                // Cast selection appropiately
                const singleSelectedOption = selectedOption as ABProductOptionSingleSelectedValue;

                // Increase the price for the given selected value
                const selectedPossibleValue = productOption.possible_values.find(obj => obj.id === singleSelectedOption.selected_value);
                if (selectedPossibleValue) {
                    unitPrice += selectedPossibleValue.price_adjustment;
                }
            } else if (productOption.type === ABProductOptionsType.MULTIPLE_SELECTION) {
                // Cast selection appropiately
                const multipleSelectedOption = selectedOption as ABProductOptionMultipleSelectedValues;

                // Increase the price for every selected option
                multipleSelectedOption.selected_values.forEach(selectedValueId => {
                    const selectedPossibleValue = productOption.possible_values.find(obj => obj.id === selectedValueId);
                    if (selectedPossibleValue) {
                        unitPrice += selectedPossibleValue.price_adjustment;
                    }
                });
            }
        }
    });

    return unitPrice;
}
