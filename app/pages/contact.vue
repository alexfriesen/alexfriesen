<template>
	<Content class="relative flex flex-col items-center gap-4">
		<div class="prose dark:prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('contact.title') }}
			</h2>
		</div>

		<div v-if="success" class="flex flex-col rounded-xl p-8 shadow text-white bg-green-800">
			<Icon name="heroicons:check-circle" class="w-32 h-32 m-auto" />
			<p>
				{{ $t('contact.success') }}
			</p>
		</div>

		<div v-if="error" class="flex flex-col rounded-xl p-8 shadow text-white bg-red-800">
			<Icon name="heroicons:exclamation-circle" class="w-32 h-32 m-auto" />
			<p>{{ $t('contact.error') }}</p>
		</div>

		<UForm :schema="safeParser(schema)" :state="state" class="max-w-lg w-full" @submit="handleSubmit">
			<UCard v-if="!success" class="w-full">
				<div class="space-y-2">
					<UFormGroup :label="$t('contact.email')" name="email" required size="xl">
						<UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope"
							trailing />
					</UFormGroup>

					<UFormGroup :label="$t('contact.message')" name="message" required size="xl">
						<UTextarea v-model="state.message" :placeholder="$t('contact.messagePlaceholder')" />
					</UFormGroup>
				</div>

				<template #footer>
					<UButton :loading="pending" :disabled="pending" type="sumbit" size="xl" color="primary"
						variant="solid" block>
						<span v-if="pending">{{ $t('contact.sending') }}</span>
						<span v-else>{{ $t('contact.send') }}</span>
					</UButton>
				</template>
			</UCard>
		</UForm>
	</Content>
</template>

<script setup lang="ts">
import { safeParser, pipe, string, object, email, minLength, trim, type InferOutput } from 'valibot';
import type { FormSubmitEvent } from '#ui/types';

definePageMeta({
	title: 'contact.title',
	description: 'contact.description',
})

const schema = object({
	email: pipe(string(), trim(), email('Invalid email')),
	message: pipe(string(), trim(), minLength(3, 'Must be at least 8 characters'))
})

type Schema = InferOutput<typeof schema>

const contactHost = 'https://contactme-fplu4j3puq-ey.a.run.app';

function sendMessage(email: string, message: string) {
	return fetch(`${contactHost}/contact`, {
		method: 'post',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ email, message }),
	});
}

const isSubmitted = ref(false);
const pending = ref(false);
const error = ref(false);
const success = ref(false);

const state = reactive({
	email: undefined,
	message: undefined
})

function handleSubmit(event: FormSubmitEvent<Schema>) {
	const { email, message } = event.data;

	success.value = false;
	error.value = false;
	pending.value = true;
	isSubmitted.value = true;

	sendMessage(email, message)
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
