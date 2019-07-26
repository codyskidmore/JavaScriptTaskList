class HtmlErrorFormatter{
    format(errors){
        console.log(errors);
        let message = '<ul>';
        message += '<span>The following validation errors occurred:</span>';
        errors.forEach(errorEvent => {
            message += `<li>EventId: ${errorEvent.eventId}, Message: ${errorEvent.message}</li>`;
        });
        message += '</ul>';
        return message;
    }
}