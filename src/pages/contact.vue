<template>
	<Content class="relative flex flex-col items-center">
		<div v-if="success" class="flex flex-col rounded-xl p-8 shadow bg-green-800">
			<Icon name="heroicons:check-circle" class="w-32 h-32 m-auto" />
			<p>
				Thank you for your message, I will get back to you as soon as possible.
			</p>
		</div>

		<div v-if="error" class="flex flex-col rounded-xl p-8 shadow bg-red-800">
			<Icon name="heroicons:exclamation-circle" class="w-32 h-32 m-auto" />
			<p>Sorry! Something went wrong. Please try again later.</p>
		</div>

		<form
			v-if="!success"
			class="
        flex flex-col
        w-full
        max-w-lg
        rounded-xl
        p-8
        shadow
        bg-gray-800
        gap-4
      "
			@submit.prevent="handleSubmit"
		>
			<div class="flex flex-wrap">
				<div class="w-full">
					<label>
						<span
							class="
                block
                uppercase
                tracking-wide
                text-gray-400 text-xs
                font-bold
                mb-2
              "
						>
							E-Mail
						</span>
						<input
							v-model.trim="email"
							class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
							type="email"
							name="email"
						>
					</label>
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full">
					<label>
						<span
							class="
                block
                uppercase
                tracking-wide
                text-gray-400 text-xs
                font-bold
                mb-2
              "
						>
							Message
						</span>
						<textarea
							v-model.trim="message"
							class="
                no-resize
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
                h-48
                resize-none
              "
							name="message"
						/>
					</label>
				</div>
			</div>

			<button
				class="
          inline-flex
          gap-1
          items-center
          justify-evenly
          px-5
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-gray-300
          bg-gray-200
          hover:bg-gray-700
          text-gray-800
          hover:text-gray-200
          disabled:opacity-50
        "
				:disabled="isSubmitted"
			>
				<span v-if="pending">Sending...</span>
				<span v-else>Send</span>
			</button>
		</form>
	</Content>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contactmeHost = 'https://contactme-fplu4j3puq-ey.a.run.app';

function sendMessage(email: string, message: string) {
	return fetch(`${contactmeHost}/contact`, {
		method: 'post',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ email, message }),
	});
}

const email = ref('');
const message = ref('');
const isSubmitted = ref(false);
const pending = ref(false);
const error = ref(false);
const success = ref(false);

function handleSubmit() {
	isSubmitted.value = true;
	pending.value = true;

	sendMessage(email.value, message.value)
		.then(() => {
			success.value = true;
		})
		.catch(() => {
			error.value = true;
			isSubmitted.value = false;
		})
		.finally(() => {
			pending.value = false;
		});
}
</script>
