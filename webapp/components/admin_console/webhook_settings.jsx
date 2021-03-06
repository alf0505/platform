// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';

import AdminSettings from './admin_settings.jsx';
import BooleanSetting from './boolean_setting.jsx';
import {FormattedMessage} from 'react-intl';
import SettingsGroup from './settings_group.jsx';

export default class WebhookSettings extends AdminSettings {
    constructor(props) {
        super(props);

        this.getConfigFromState = this.getConfigFromState.bind(this);

        this.renderSettings = this.renderSettings.bind(this);
    }

    getConfigFromState(config) {
        config.ServiceSettings.EnableIncomingWebhooks = this.state.enableIncomingWebhooks;
        config.ServiceSettings.EnableOutgoingWebhooks = this.state.enableOutgoingWebhooks;
        config.ServiceSettings.EnableCommands = this.state.enableCommands;
        config.ServiceSettings.EnableOnlyAdminIntegrations = this.state.enableOnlyAdminIntegrations;
        config.ServiceSettings.EnablePostUsernameOverride = this.state.enablePostUsernameOverride;
        config.ServiceSettings.EnablePostIconOverride = this.state.enablePostIconOverride;

        return config;
    }

    getStateFromConfig(config) {
        return {
            enableIncomingWebhooks: config.ServiceSettings.EnableIncomingWebhooks,
            enableOutgoingWebhooks: config.ServiceSettings.EnableOutgoingWebhooks,
            enableCommands: config.ServiceSettings.EnableCommands,
            enableOnlyAdminIntegrations: config.ServiceSettings.EnableOnlyAdminIntegrations,
            enablePostUsernameOverride: config.ServiceSettings.EnablePostUsernameOverride,
            enablePostIconOverride: config.ServiceSettings.EnablePostIconOverride
        };
    }

    renderTitle() {
        return (
            <h3>
                <FormattedMessage
                    id='admin.integrations.webhook'
                    defaultMessage='Webhooks and Commands'
                />
            </h3>
        );
    }

    renderSettings() {
        return (
            <SettingsGroup>
                <BooleanSetting
                    id='enableIncomingWebhooks'
                    label={
                        <FormattedMessage
                            id='admin.service.webhooksTitle'
                            defaultMessage='Enable Incoming Webhooks: '
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.webhooksDescription'
                            defaultMessage='When true, incoming webhooks will be allowed. To help combat phishing attacks, all posts from webhooks will be labelled by a BOT tag.'
                        />
                    }
                    value={this.state.enableIncomingWebhooks}
                    onChange={this.handleChange}
                />
                <BooleanSetting
                    id='enableOutgoingWebhooks'
                    label={
                        <FormattedMessage
                            id='admin.service.outWebhooksTitle'
                            defaultMessage='Enable Outgoing Webhooks: '
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.outWebhooksDesc'
                            defaultMessage='When true, outgoing webhooks will be allowed.'
                        />
                    }
                    value={this.state.enableOutgoingWebhooks}
                    onChange={this.handleChange}
                />
                <BooleanSetting
                    id='enableCommands'
                    label={
                        <FormattedMessage
                            id='admin.service.cmdsTitle'
                            defaultMessage='Enable Custom Slash Commands: '
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.cmdsDesc'
                            defaultMessage='When true, user created slash commands will be allowed.'
                        />
                    }
                    value={this.state.enableCommands}
                    onChange={this.handleChange}
                />
                <BooleanSetting
                    id='enableOnlyAdminIntegrations'
                    label={
                        <FormattedMessage
                            id='admin.service.integrationAdmin'
                            defaultMessage='Restrict creating integrations to Team and System Admins: '
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.integrationAdminDesc'
                            defaultMessage='When true, user created integrations can only be created by admins.'
                        />
                    }
                    value={this.state.enableOnlyAdminIntegrations}
                    onChange={this.handleChange}
                />
                <BooleanSetting
                    id='enablePostUsernameOverride'
                    label={
                        <FormattedMessage
                            id='admin.service.overrideTitle'
                            defaultMessage='Enable webhooks and slash commands to override usernames:'
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.overrideDescription'
                            defaultMessage='When true, webhooks and slash commands will be allowed to change the username they are posting as. Note, combined with allowing icon overriding, this could open users up to phishing attacks.'
                        />
                    }
                    value={this.state.enablePostUsernameOverride}
                    onChange={this.handleChange}
                />
                <BooleanSetting
                    id='enablePostIconOverride'
                    label={
                        <FormattedMessage
                            id='admin.service.iconTitle'
                            defaultMessage='Enable webhooks and slash commands to override profile picture icons:'
                        />
                    }
                    helpText={
                        <FormattedMessage
                            id='admin.service.iconDescription'
                            defaultMessage='When true, webhooks and slash commands will be allowed to change the icon they post with. Note, combined with allowing username overriding, this could open users up to phishing attacks.'
                        />
                    }
                    value={this.state.enablePostIconOverride}
                    onChange={this.handleChange}
                />
            </SettingsGroup>
        );
    }
}
