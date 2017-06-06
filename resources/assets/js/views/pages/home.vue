<template>
<div>


<button class="button" @click="activeTab = 1">Set Music</button>
<b-tabs v-model="activeTab">
    <b-tab-item label="Pictures">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vestibulum dui vel molestie egestas.
        Nulla vulputate elementum diam quis consectetur.
    </b-tab-item>

    <b-tab-item label="Music">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vestibulum dui vel molestie egestas.
        Nulla vulputate elementum diam quis consectetur.
        Integer pulvinar laoreet nibh non faucibus.
        Suspendisse ut cursus lectus. Donec consectetur turpis at leo ultricies rhoncus.
        Cras consequat aliquet eros nec porta.
        Nullam sit amet mollis turpis.
        Aenean vitae tortor et velit sodales faucibus.
    </b-tab-item>

    <b-tab-item label="Videos">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vestibulum dui vel molestie egestas.
        Nulla vulputate elementum diam quis consectetur.
        Integer pulvinar laoreet nibh non faucibus.
    </b-tab-item>
</b-tabs>

<b-notification type="is-danger" has-icon>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
</b-notification>



<b-message title="Warning with icon" type="is-warning" has-icon>
    Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
</b-message>
<b-field label="Name">
    <b-input value="John Silver"></b-input>
</b-field>

<b-field label="Email"
    type="is-danger"
    message="This email is invalid">
    <b-input type="email"
        value="john@"
        maxlength="30">
    </b-input>
</b-field>

<b-field label="Username"
    type="is-success"
    message="This username is available">
    <b-input value="johnsilver" maxlength="30"></b-input>
</b-field>

<b-field label="Password">
    <b-input type="password"
        value="iwantmytreasure"
        password-reveal>
    </b-input>
</b-field>

<b-field label="Message">
    <b-input maxlength="200" type="textarea"></b-input>
</b-field>

<b-field label="Simple">
    <b-select placeholder="Select a name">
        <option
            v-for="option in options"
            :value="option.id"
            :key="option.id">
            {{ option.first_name }}
        </option>
    </b-select>
</b-field>
<div class="block">
    <b-checkbox>Basic</b-checkbox>
    <b-checkbox v-model="checkbox">{{ checkbox }}</b-checkbox>
    <b-checkbox disabled>Disabled</b-checkbox>
    <b-checkbox disabled checked>Disabled Checked</b-checkbox>
</div>
<div class="block">
    <b-radio-group v-model="radio">
        <b-radio value="Flint">Flint</b-radio>
        <b-radio value="Silver">Silver</b-radio>
        <b-radio value="Jack">Jack</b-radio>
        <b-radio value="Vane" disabled>Vane</b-radio>
    </b-radio-group>
</div>
<div class="block">
    <b-switch>Default</b-switch>
    <b-switch v-model="isSwitched">{{ isSwitched }}</b-switch>
    <b-switch disabled>Disabled</b-switch>
    <b-switch disabled checked>Disabled Checked</b-switch>
</div>

</div>
</template>

<script>
    export default {
        data() {
            return {
                'content' : 'content',
                activeTab: 0,
                options: [
                {"id":1,"first_name":"Jesse"},
                {"id":2,"first_name":"John"},
                {"id":3,"first_name":"Tina"},
                {"id":4,"first_name":"Clarence"},
                {"id":5,"first_name":"Anne"},
                ],
                checkbox: true,
                radio: 'Vane',
                isSwitched: true

            }
        }
    }
</script>