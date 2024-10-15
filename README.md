# [Artificial Intelligence And Software Development Hackathon](https://rsue.ru/universitet/novosti/novosti.php?ELEMENT_ID=106583)

## Case description here: `/details/case.pdf`

## 🏅 The Ødy team took first place

![hackathon](/details/cert.jpg)

> [!IMPORTANT]  
> This is documentation repo. [Main telegram bot repo here](https://github.com/plutalov/report-bot).

## 📜 Description

It is necessary to implement a Telegram bot in C# using FastReport.Cloud.SDK to demonstrate the capabilities of the FastReport cloud solution Cloud.

The requirement for the Bot:
1. The bot must accept 3 commands:
2. The /help command should return a short description, a list of available commands,
information about the authors of the application and a link to https://fastreport.cloud .
The /start command should return a short description.
The /status command should return information about the current status of
the task.
3. The bot must be implemented using a dialog. In addition to commands in the chat,
the Telegram Buttons mechanism should be implemented https://core.telegram.org/api/bots/buttons#ca
ll back-queries. A button should be implemented for each command.
4. The bot must accept FRX or FBX files for input, after uploading, the Bot must inform
the user that the file has been added to the queue and issue a status request button.
5. At the exit, the Bot must send the generated PDF file to the chat.
6. If an error occurs during data processing, the Bot must inform
the user.

![hackathon](/details/image.jpg)
