# Alias Validator.
Welcome to Alias Validator!

Alias Validator is a powerful tool designed to streamline the content PR and individual developer alias validation process. This web application provides a simple yet effective solution to validate HTML code, ensuring that it adheres to specific standards and guidelines. Follow this comprehensive user guide to make the most out of Alias Validator.
# Getting Started


  * ## Accessing Alias Validator
    * Open your web browser and navigate to the following URL: https://balu-phanendra-k.github.io/alias/ 

 * ## Main Interface
   * Upon reaching the site, you'll encounter a clean and user-friendly interface with a single textarea.
     
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/eb7aebe0-1de8-4152-9ace-02082bdb67ab)

# Steps to follow

  1. ### Paste HTML Code
     Copy your HTML code and paste it into the designated textarea.

2.  ### Click Validate
    Press the "Validate" button to initiate the validation process.

# Validation Results
Alias Validator performs a thorough analysis of the provided HTML code and provides detailed feedback based on the following criteria:

 1. * ### Alias Presence Check:
       * If an alias is missing, Alias Validator will display a message indicating the absence of an alias along with the corresponding href.

2. *  ### Alias Format Check:
       * Alias Validator ensures that aliases follow the proper format, containing only underscores. If an invalid alias is detected, it will be highlighted along with the associated href.

 3. * ### Alias Duplication Check:
       * In case an alias is repeated, Alias Validator identifies the duplicated alias and displays the relevant href.

 4. * ### Image Hosting Check:
       * Alias Validator verifies if images are hosted in Salesforce Marketing Cloud (SFMC). If not, it will display the source link of the image.

5. * ###  Consecutive <!--[if mso]> Tags Check:
     * Alias Validator identifies errors if there are two consecutive <!--[if mso]> tags in the HTML code.

 6. * ### Unsubscribe Content Block Check:
      * Alias Validator now checks for the presence of an unsubscribe content block. If found, it will display information about the content block present in the given HTML.

# Examples of Error Messages

*  ###  Missing Alias:
        "Missing alias for link with href = 'https://www.w3schools.com'."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/753a12b8-07a0-46dd-9b46-ddb3a4c55e02)



*  ###  Invalid Alias Format:
        "Invalid alias 'hello.a' for link with href = 'https://www.w3schools.com'."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/79ed7297-4781-47cc-b5b4-d6f4b2fc9806)



*  ###  Duplicate Aliases:
        "Duplicate alias 'hello' found for link with href = 'https://www.w3schools.com'."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/c75b011a-d111-4f5e-b2f8-ed951819bc5e)

*  ###  Tag Structure Errors:
        "Image is not hosted on SFMC tag: "smiley.gif" "
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/f9b39cc0-044a-43dc-a451-960ff8c9f3f2)


*  ###  Consecutive <!--[if mso]> Tags Error:
        "Two consecutive <!--[if mso]> tags detected."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/a415b743-a03b-449a-bd05-68bf7599a9ee)


*  ###  Unsubscribe Content Block:
       " No Unsubscribe content block present."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/30dd09c2-8f8b-4201-9a21-813db378ca9c)
   ![cb](https://github.com/Balu-Phanendra-K/alias/assets/144592153/bfafc301-7052-440b-b033-1eb85a7dbd37)




