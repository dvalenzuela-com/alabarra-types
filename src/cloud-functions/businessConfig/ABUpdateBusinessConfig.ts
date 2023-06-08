import { type ABBusinessConfigCountry, type ABBusinessConfigCurrency, type ABPalette, type ABTipOption } from '../../types/ABBusinessConfig'
import { type ABWeekOpeningHours } from '../../types/ABOpeningHours'
import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API to create a new table
 */
export interface ABUpdateBusinessConfigData {

  /**
     * Business id
     */
  business_id: string

  business_name?: string
  country?: ABBusinessConfigCountry
  main_language?: string
  currency?: ABBusinessConfigCurrency
  logo_url?: string
  palette?: ABPalette
  week_opening_hours?: ABWeekOpeningHours
  tip_options?: ABTipOption[]
}

/**
 * Represents the result of a call to the update config API
 */
export type ABUpdateBusinessConfigResponse = ABUpdateBusinessConfigResponseSuccess | ABResponseError

export interface ABUpdateBusinessConfigResponseSuccess extends ABResponseSuccessAbstract {

  result: {
    /**
        * The ID of the business
        */
    business_id: string
  }
}
