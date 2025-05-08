<template>
	<Content class="relative flex flex-col items-center gap-4">
		<div class="prose dark:prose-invert">
			<h2 class="text-3xl sm:text-4xl tracking-tight">
				{{ $t('contact.title') }}
			</h2>
		</div>

		<div v-if="success"
			class="flex flex-col rounded-xl p-8 shadow text-white text-center bg-green-800 max-w-lg w-full">
			<UIcon name="i-lucide-check-circle" class="w-32 h-32 m-auto" />
			<p>
				{{ $t('contact.success') }}
			</p>
		</div>

		<div v-if="error" class="flex flex-col rounded-xl p-8 shadow text-white text-center bg-red-800 max-w-lg w-full">
			<Icon name="i-lucide-alert-circle" class="w-32 h-32 m-auto" />
			<p>{{ $t('contact.error') }}</p>
		</div>

		<UForm :schema="schema" :state="state" class="max-w-lg w-full" @submit="handleSubmit">
			<UCard v-if="!success" class="w-full">
				<div class="space-y-2">
					<UFormField :label="$t('contact.email')" name="email" required size="xl">
						<UInput v-model="state.email" placeholder="you@example.com" icon="i-lucide-envelope" trailing
							class="w-full" />
					</UFormField>

					<UFormField :label="$t('contact.message')" name="message" required size="xl">
						<UTextarea v-model="state.message" :placeholder="$t('contact.messagePlaceholder')"
							class="w-full" />
					</UFormField>
				</div>

				<template #footer>
					<UButton :loading="pending" :disabled="pending" type="submit" size="xl" color="primary"
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
import { pipe, string, object, email, minLength, trim, type InferOutput } from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

definePageMeta({
	title: 'contact.title',
	description: 'contact.description',
})

const schema = object({
	email: pipe(string(), trim(), email('Invalid email')),
	message: pipe(string(), trim(), minLength(3, 'Must be at least 3 characters')),
})

type Schema = InferOutput<typeof schema>

const contactHost = 'https://contactme-fplu4j3puq-ey.a.run.app';

function sendMessage(email: string, message: string) {
	return $fetch(`${contactHost}/contact`, {
		method: 'POST',
		body: { email, message },
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

async function handleSubmit(event: FormSubmitEvent<Schema>) {
	const { email, message } = event.data;

	success.value = false;
	error.value = false;
	pending.value = true;
	isSubmitted.value = true;

	await sendMessage(email, message)
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
