# Alias Validator.
Welcome to Alias Validator!

Alias Validator is a powerful tool designed to streamline the content PR and individual developer alias validation process. This web application provides a simple yet effective solution to validate HTML code, ensuring that it adheres to specific standards and guidelines. Follow this comprehensive user guide to make the most out of Alias Validator.
# Getting Started


  * ## Accessing Alias Validator
    * Open your web browser and navigate to the following URL: https://balu-phanendra-k.github.io/alias/ 

 * ## Main Interface
   * Upon reaching the site, you'll encounter a clean and user-friendly interface with a single textarea.

![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/8313fb2b-61c8-486d-8886-fc6c36077da1)
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
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/d05cd1b5-039e-434a-a2fa-94e60db8abe9)


*  ###  Invalid Alias Format:
        "Invalid alias 'hello.a' for link with href = 'https://www.w3schools.com'."
  ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/333c0550-ff05-48f1-bef3-a9bea399d93a)


*  ###  Duplicate Aliases:
        "Duplicate alias 'hello' found for link with href = 'https://www.w3schools.com'."
  ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/7cd8ae3d-0e97-468b-8d3e-57ae9846e790)


*  ###  Tag Structure Errors:
        "Image is not hosted on SFMC tag: "smiley.gif" "
  ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/88441468-c24f-43d3-8499-b0edade54231)


*  ###  Consecutive <!--[if mso]> Tags Error:
        "Two consecutive <!--[if mso]> tags detected."
 ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/ca41e16e-27c3-4feb-9c3c-f99bd391491d)


*  ###  Unsubscribe Content Block:
       " No Unsubscribe content block present."
   ![image](https://github.com/Balu-Phanendra-K/alias/assets/144592153/14ad7f16-9b02-4059-95de-3570ff62d79e)

