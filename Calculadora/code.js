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
      
      WELCOME_MESSAGE: 'Hola, esn que puedo ayudarte?, Puedo realizar sumas, restas, multiplicaciones y divisiones',
      HELLO_MESSAGE: '¡Hola amigo, todo bien con tu día',
      HELP_MESSAGE: '¿Le puedo ayudar en algo?',
      GOODBYE_MESSAGE: '¡Adios, amigo!',
      FALLBACK_MESSAGE: 'lo siento vuelva a realizar la accion por favor',
      ERROR_MESSAGE: 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo. Prueba poniendo suma 5 y 9.',
      VALIDATE_MESSAGE:'ingrese solo números positivos, intente decir convertir 5 euros a pesos',
      CONV_SUMA_MESSAGE:'la suma de %s mas %s es %s',
      CONV_RESTA_MESSAGE:'la resta de %s menos %s es %s',
      CONV_MULTIPLICA_MESSAGE:'la multiplicacion de %s por %s es %s',
      CONV_DIVIDE_MESSAGE:'la division de %s entre %s es %s',
      ADVERTEN_MULTIPLICAR_MESSAGE:'Ingresa solo valores mayores a cero',
      ADVERTEN_DIVIDIR_MESSAGE:'Ingresa solo numeros positivos y mayores a cero'
      
    }
  },
  en:{
    translation: {
    WELCOME_MESSAGE: 'Hello, can I help you? I can do addition, subtraction, multiplication and division',
      HELLO_MESSAGE: 'Hello friend, all good with your day',
      HELP_MESSAGE: 'How can I help you?',
      GOODBYE_MESSAGE: 'Goodbye, friend!',
      FALLBACK_MESSAGE: 'sorry redo the action please',
      ERROR_MESSAGE: 'Sorry, I had trouble doing what you asked. Try again.',
      VALIDATE_MESSAGE:'Sorry, I had trouble doing what you asked. Try again. Try putting sum 5 and 9.',
      CONV_SUMA_MESSAGE:'the sum of %s plus %s is %s',
      CONV_RESTA_MESSAGE:'the subtraction of %s minus %s is %s',
      CONV_MULTIPLICA_MESSAGE:'the multiplication of %s by %s is %s',
      CONV_DIVIDE_MESSAGE:'the division of %s by %s is %s',
      ADVERTEN_MULTIPLICAR_MESSAGE:'Enter only values ​​greater than zero',
      ADVERTEN_DIVIDIR_MESSAGE:'Enter only positive numbers and greater than zero'
      
    }
  }
}


const Sumar_Handler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Sumar';
  },
  handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const primero = parseInt(handlerInput.requestEnvelope.request.intent.slots.primero.value);
    const segundo = parseInt(handlerInput.requestEnvelope.request.intent.slots.segundo.value);
    const resultado = (primero + segundo);

    const speakOutput = requestAttributes.t(`CONV_SUMA_MESSAGE`,primero,segundo,resultado);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};

const Restar_Handler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Restar';
  },
  handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const primero = parseInt(handlerInput.requestEnvelope.request.intent.slots.primero.value);
    const segundo = parseInt(handlerInput.requestEnvelope.request.intent.slots.segundo.value);
    const resultado = (primero - segundo);

    const speakOutput = requestAttributes.t(`CONV_RESTA_MESSAGE`,primero,segundo,resultado);

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};

const Multiplicar_Handler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Multiplicar';
  },
  handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const primero = parseInt(handlerInput.requestEnvelope.request.intent.slots.primero.value);
    const segundo = parseInt(handlerInput.requestEnvelope.request.intent.slots.segundo.value);
    
    if (primero === 0 || segundo === 0){
        const speakOutput = requestAttributes.t('ADVERTEN_MULTIPLICAR_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else if(primero < 0 && segundo < 0){
        const resultado = (primero * segundo);

        const speakOutput = requestAttributes.t(`CONV_MULTIPLICA_MESSAGE`,'<say-as interpret-as="number">-primero</say-as>','<say-as interpret-as="number">-segundo</say-as>',resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    else{
        const resultado = (primero * segundo);

        const speakOutput = requestAttributes.t(`CONV_MULTIPLICA_MESSAGE`,primero,segundo,resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
  }
};

const Dividir_Handler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Dividir';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const primero = parseInt(handlerInput.requestEnvelope.request.intent.slots.primero.value);
    const segundo = parseInt(handlerInput.requestEnvelope.request.intent.slots.segundo.value);
    
    if(primero<=0 || segundo <= 0){
        const speakOutput = requestAttributes.t('ADVERTEN_DIVIDIR_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }else{
        const resultado = (primero / segundo);

        const speakOutput = requestAttributes.t(`CONV_DIVIDE_MESSAGE`, primero,segundo,resultado) ;

        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    }
    
    
  }
};

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
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');

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
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo. Prueba poniendo suma 5 y 9.';
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
        Sumar_Handler,
        Restar_Handler,
        Multiplicar_Handler,
        Dividir_Handler,
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
