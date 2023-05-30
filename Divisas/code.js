/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

// i18n dependencies. i18n is the main module, sprintf allows us to include variables with '%s'.
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const languageStrings = {
  es: {
      
    translation: {
      
      WELCOME_MESSAGE: '¡Bienvenido Adair!, soy un convertidor de divisas, puedo convertir pesos dolares o euros, ¿Desea realizar una conversion?',
      HELLO_MESSAGE: '¡Hola amigo, todo bien con tu día',
      HELP_MESSAGE: '¿Le puedo ayudar en algo?',
      GOODBYE_MESSAGE: '¡Adios, estimado!',
      FALLBACK_MESSAGE: 'lo siento vuelva a realizar la accion por favor',
      ERROR_MESSAGE: 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.',
      VALIDATE_MESSAGE:'ingrese solo números positivos, intente decir convertir 5 euros a pesos',
      CONV_DOLAREURO_MESSAGE:'la conversion de %s euros equivale %s en dolares. ¿Deseas continuar con otra conversión?',
      CONV_EURODOLAR_MESSAGE:'la conversion de %s dolars equivale %s en euros. ¿Deseas continuar con otra conversión?',
      CONV_PESODOLARE_MESSAGE:'la conversion de %s pesos equivale %s en dolares. ¿Deseas continuar con otra conversión?',
      CONV_DOLAREPESO_MESSAGE:'la conversion de %s dolares equivale %s en pesos. ¿Deseas continuar con otra conversión?',
      CONV_PESOEURO_MESSAGE:'la conversion de %s pesos equivale %s en euros. ¿Deseas continuar con otra conversión?',
      CONV_EUROPESO_MESSAGE:'la conversion de %s euros equivale %s en pesos. ¿Deseas continuar con otra conversión?'
      
      
    }
  },
  en:{
    translation: {
    WELCOME_MESSAGE: 'Welcome Adair! I am a currency converter, I can convert pesos, dollars or euros.\n\n What do you want to convert?',
      HELLO_MESSAGE: 'Hello friend, all good with your day',
      HELP_MESSAGE: 'How can I help you?',
      GOODBYE_MESSAGE: 'Goodbye, estimated!',
      FALLBACK_MESSAGE: 'sorry redo the action please',
      ERROR_MESSAGE: 'Sorry, I had trouble doing what you asked. Try again.',
      VALIDATE_MESSAGE:'enter only positive numbers, try saying convert 5 euros to pesos',
      CONV_EURODOLAR_MESSAGE:'The conversion of %s euros equals %s in dollars. Do you want to continue with another conversion?',
      CONV_DOLAREURO_MESSAGE:'The conversion of %s dollars equals %s in euros. Do you want to continue with another conversion?',
      CONV_PESODOLARE_MESSAGE:'The conversion of %s pesos equals %s in dollars. Do you want to continue with another conversion?',
      CONV_DOLAREPESO_MESSAGE:'The conversion of %s dollars equals %s in pesos. Do you want to continue with another conversion?',
      CONV_PESOEURO_MESSAGE:'The conversion of %s pesos equals %s in euros. Do you want to continue with another conversion?',
      CONV_EUROPESO_MESSAGE:'The conversion of %s euros equals %s in pesos. Do you want to continue with another conversion?'
      
    }
  }
}



const Convertir_euro_dolar_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_euro_dolar';
    },
    async handle(handlerInput) {
        const {attributesManager} =handlerInput;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const intent = handlerInput.requestEnvelope.request.intent;
        
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        
        if (cantidad >= 0.1) {
            const valor = 1.12;
            const resultado = (cantidad * valor).toFixed(2);
            const speechText = requestAttributes.t('CONV_EURODOLAR_MESSAGE',cantidad,resultado);
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt('¿Deseas continuar con otra conversión?')
                .getResponse();
        } else {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt('¿Deseas continuar con otra conversión?')
                .getResponse();
        }
    }
}


const Convertir_dolar_euro_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_dolar_euro';
    },
handle(handlerInput) {
    const {attributesManager} =handlerInput;
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const intent = handlerInput.requestEnvelope.request.intent;
        
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
    if (cantidad >= 0.1){
        const valor = 1.12;
        const resultado = (cantidad / valor).toFixed(2);
        const speechText = requestAttributes.t('CONV_DOLAREURO_MESSAGE',cantidad,resultado);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }else{
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }
}
}

const Convertir_peso_dolar_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_peso_dolar';
    },
handle(handlerInput) {
    const {attributesManager} =handlerInput;
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const intent = handlerInput.requestEnvelope.request.intent;
        
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
    if (cantidad >= 0.1){
        const valor = 17.50;
        const resultado = (cantidad / valor).toFixed(2);
        const speechText = requestAttributes.t('CONV_PESODOLARE_MESSAGE',cantidad,resultado);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }else{
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }
}
}

const Convertir_dolar_peso_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_dolar_peso';
    },
handle(handlerInput) {
    const {attributesManager} =handlerInput;
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const intent = handlerInput.requestEnvelope.request.intent;
    
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
    if (cantidad >= 0.1){
        const valor = 17.50;
        const resultado = (cantidad * valor).toFixed(2);
        const speechText = requestAttributes.t('CONV_DOLAREPESO_MESSAGE',cantidad,resultado);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }else{
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }
}
}

const Convertir_peso_euro_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_peso_euro';
    },
handle(handlerInput) {
    const {attributesManager} =handlerInput;
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const intent = handlerInput.requestEnvelope.request.intent;
    
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
    if (cantidad >= 0.1){
        const valor = 19.01;
        const resultado = (cantidad / valor).toFixed(2);
        const speechText = requestAttributes.t('CONV_PESOEURO_MESSAGE',cantidad,resultado);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }else{
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }
}
}

const Convertir_euro_peso_Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_euro_peso';
    },
handle(handlerInput) {
    const {attributesManager} =handlerInput;
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const intent = handlerInput.requestEnvelope.request.intent;
    
    const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
    if (cantidad >= 0.1){
        const valor = 19.01;
        const resultado = (cantidad * valor).toFixed(2);
        const speechText = requestAttributes.t('CONV_EUROPESO_MESSAGE',cantidad,resultado);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }else{
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('VALIDATE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas continuar con otra conversión?')
            .getResponse();
    }
}
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELLO_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};


// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'es',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Convertir_euro_dolar_Handler,
        Convertir_dolar_euro_Handler,
        Convertir_peso_dolar_Handler,
        Convertir_dolar_peso_Handler,
        Convertir_peso_euro_Handler,
        Convertir_euro_peso_Handler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .addRequestInterceptors(LocalizationInterceptor,LoggingRequestInterceptor)
    .addResponseInterceptors(LoggingResponseInterceptor)
    .lambda();
